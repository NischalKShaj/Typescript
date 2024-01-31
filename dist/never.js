"use strict";
function processResult(data) {
    if (data instanceof Error) {
        console.error("An error occured :", data.message);
        throw new Error("Processing failed");
    }
    return data;
}
const results = "success";
const processedData = processResult(results);
console.log(processedData);
