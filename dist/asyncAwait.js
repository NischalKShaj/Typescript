"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchDatas() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sucess = true;
                if (sucess) {
                    resolve("data fetched successfully");
                }
                else {
                    reject("data fetching failed");
                }
            }, 2000);
        });
    });
}
function fetchedData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data = yield fetchDatas();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
fetchedData()
    .then(() => {
    console.log("Async opertaion finished");
})
    .catch((error) => {
    console.log(error);
});
