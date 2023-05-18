import { got } from "got";
import { defaultHeaders } from "../../utils/constant.js";

/**
 *  getDataFromElastic fetches data using given url, body
 *  and other header options. If response header come
 *  from elasticsearch, it start streaming data given
 *  by elasticsearch to client else if an error arises,
 *  it responds client with 502 status code.
 */
export const getDataFromElastic = async ({
  url,
  elasticQuery,
  method = "post",
  headers,
  response,
}) => {
  const body = elasticQuery;
  const finalHeaders = {
    ...defaultHeaders,
    ...headers,
  };
  const options = { method, headers: finalHeaders, body };
  const readStream = got.stream(url, options);

  readStream.on("response", async (res) => {
    //console.log(res);
    // here we recieve response headers from elastic search.
    // which contains status code etc.
    response.writeHead(200, { "Content-Type": "application/json" });

    readStream.pipe(response);
    // for await (const chunk of readStream)
    //   response.write(Buffer.from(chunk).toString());
  });
  // readStream.on("end",async()=>{
  //    response.end();
  // })
  readStream.once("error", (error) => {
    console.log("logging this error", error.message);
    response.status(500).json({ message: "server error" });
  });
};
