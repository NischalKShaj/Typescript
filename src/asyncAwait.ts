async function fetchDatas(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      let sucess = true;
      if (sucess) {
        resolve("data fetched successfully");
      } else {
        reject("data fetching failed");
      }
    }, 2000);
  });
}
async function fetchedData() {
  try {
    let data = await fetchDatas();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchedData()
  .then(() => {
    console.log("Async opertaion finished");
  })
  .catch((error) => {
    console.log(error);
  });
