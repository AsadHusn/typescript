"use strict";
let n = 123456789;
let s = "Typescript";
let is = true;
let sample;
let nothing = null;
let undef;
let numbers = [1, 2, 3];
let tuple = [1, "one"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
let optimizeMySize = 2;
function calculateTax(income, taxYear) {
    if ((taxYear || 2019) < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(100);
console.log(mySize);
