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
/**
 *  getDataFromElasticScrollAPI fetches data using given url, body
 *  and other header options. It uses scroll API to fetch.
 *  If response header come from elasticsearch, it start
 *  streaming data given by elasticsearch to client
 *  else if an error arises, it responds client with 502 status code.
 */
export const getDataFromElasticScrollAPI = async ({
  url,
  elasticQuery,
  method = "post",
  headers,
  response,
}) => {
  const finalHeaders = {
    ...defaultHeaders,
    ...headers,
  };
  let body = elasticQuery;
  let page = 0,
    scrollPost = "_search?scroll=1m",
    scrollId;
  let finalURL = `${url}/${scrollPost}`;
  while (page < 60) {
    page++;
    if (page === 2) {
      body = `{"scroll_id":"${scrollId}","scroll":"1m"}`;
      scrollPost = "_search/scroll";
      finalURL = `${url.replace(`/${url.split("/").pop()}`, "")}/${scrollPost}`;
    }
    const options = { method, headers: finalHeaders, body };
    const rawResponse = await fetch(finalURL, options);
    const data = await rawResponse.json();
    if (data.error) {
      console.log("logging this error", data.error);
      if (page === 1) {
        response.status(500).json({ message: "server error" });
      } else {
        response.end("server error");
      }
      break;
    }
    scrollId = data["_scroll_id"];
    const result = data["hits"]["hits"];
    if (page === 1)
      response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(result));
    const scroll_size = data["hits"]["hits"].length;
    console.log("scroll_size ", scroll_size);
    if (!scroll_size > 0) {
      break;
    }
  }
  response.end();
  console.log("done");
};
