"use strict";
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("data fetched successfully");
            }
            else {
                reject("data fetching failed");
            }
        }, 2000);
    });
}
fetchData()
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
});
