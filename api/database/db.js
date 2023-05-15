import { got } from "got";
export const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/x-ndjson",
  responseType: "stream",
};
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
    response.status(502).json({ message: "server error" });
  });
};
