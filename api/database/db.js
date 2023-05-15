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
  
  response.writeHead(200, { "Content-Type": "application/json" });
  got
    .stream(url, options)
    .pipe(response)
    .on("error", (err) => {
      console.log(err);
    });
};
