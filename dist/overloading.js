"use strict";
class Overloading {
    processInput(input) {
        if (typeof input === "string") {
            console.log(`Processed input: ${input} is of type string`);
        }
        else {
            console.log(`Processed input :${input} is of type number`);
        }
    }
}
const overload = new Overloading();
overload.processInput("Hello");
overload.processInput(42);
