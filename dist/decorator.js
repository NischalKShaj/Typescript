"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator factory with parameters
function firstFactory(param) {
    console.log(`firstFactory(): factory evaluated with parameter: ${param}`);
    return function (target, key, descriptor) {
        console.log(`firstFactory(): called for method ${key} in ${target.constructor.name}`);
        // Use the descriptor, for example, by logging its value
        console.log("Descriptor value:", descriptor);
    };
}
// Decorator factory with parameters
function secondFactory(param) {
    console.log(`secondFactory(): factory evaluated with parameter: ${param}`);
    return function (target, key, descriptor) {
        console.log(`secondFactory(): called for method ${key} in ${target.constructor.name}`);
        // Use the descriptor, for example, by logging its value
        console.log("Descriptor value:", descriptor);
    };
}
// Applying decorators with parameters to the class method
class ExampleClass {
    method() { }
}
__decorate([
    firstFactory("Hello"),
    secondFactory(42)
], ExampleClass.prototype, "method", null);
// Instantiate the class and call the decorated method
const exampleInstance = new ExampleClass();
exampleInstance.method();
