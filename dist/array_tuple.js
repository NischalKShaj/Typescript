"use strict";
let arr = [];
let arr2 = ["a", "s", "d"];
let arr3 = [1, "nischal"];
arr3.push(4);
console.log(arr3);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
