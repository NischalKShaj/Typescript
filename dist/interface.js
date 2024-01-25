"use strict";
let newAd = {
    id: 1,
    githubId: "12jndls",
    role: "admin",
    name: "Nischal",
    email: "nischalkshaj5@gmail.com",
    freeTrial: () => {
        return "2 days";
    },
    couponDetails: (couponName) => {
        couponName = "welcome offer";
        console.log(couponName);
        return 10;
    },
};
console.log(newAd);
let newUr = {
    id: 1,
    githubId: "12jndls",
    name: "Nischal",
    email: "nischalkshaj5@gmail.com",
    freeTrial: () => {
        return "2 days";
    },
    couponDetails: (couponName) => {
        couponName = "welcome offer";
        console.log(couponName);
        return 10;
    },
};
console.log(newUr);
