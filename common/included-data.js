export const getIncludedData = (data) => {
  const dataBuckets = data.aggregations || {};
  let dataArray = [];

  Object.values(dataBuckets).forEach((i) => {
    i.buckets.forEach((item) => {
      const patentNumber = item.key.replaceAll(" ", "").replaceAll("/", "");

      if (!dataArray.includes(patentNumber)) {
        dataArray.push(patentNumber);
      }
    });
  });
  return dataArray;
};
