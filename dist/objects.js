"use strict";
let employee = {
    id: 1,
    name: "",
    info: (date) => console.log(date),
};
employee.name = "Asad";
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(3);
kgToLbs("4kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
let metric = "cm";
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hola!");
    }
}
greet(undefined);
