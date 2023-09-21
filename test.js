var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Base.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Base;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Child.prototype, "fullName", {
        get: function () {
            return "Child " + this.firstName + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Child;
}(Base));
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Child2.prototype, "fullName", {
        get: function () {
            return "Child 2 " + this.firstName + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Child2;
}(Base));
// function printName(name: Base[]){
//   name.forEach(function(obj){
//     console.log(obj.fullName)
//   })
// }
// printName([
//   new Child('one', '1'),
//   new Child2('two', '2'),
// ])
var a = new Child('one', '1');
var b = new Child2('two', '2');
//   printName([
//   a,
//   b
// ])
console.log(b.fullName);
