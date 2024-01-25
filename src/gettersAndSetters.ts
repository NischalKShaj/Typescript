class Test {
  private length = 10;
  get value(): number {
    return this.length;
  }
  set value(value: number) {
    this.length = value;
    console.log(this.length);
  }
}
const t = new Test();
console.log(t.value);
t.value = 20;
