type Result<T> = T | Error;

function processResult(data: Result<string>): string {
  if (data instanceof Error) {
    console.error("An error occured :", data.message);
    throw new Error("Processing failed");
  }
  return data;
}
const results: Result<string> = "success";
const processedData = processResult(results);
console.log(processedData);
