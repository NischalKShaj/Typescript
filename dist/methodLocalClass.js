"use strict";
class OuterClass {
    method() {
        class LocalClass {
            constructor(message) {
                this.message = message;
            }
            display() {
                console.log(this.message);
            }
        }
        const local = new LocalClass("Hi, I'm local class");
        local.display();
    }
}
const global = new OuterClass();
global.method();
