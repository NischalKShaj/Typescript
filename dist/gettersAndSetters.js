"use strict";
class Test {
    constructor() {
        this.length = 10;
    }
    get value() {
        return this.length;
    }
    set value(value) {
        this.length = value;
        console.log(this.length);
    }
}
const t = new Test();
console.log(t.value);
t.value = 20;
