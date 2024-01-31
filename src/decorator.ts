// Decorator factory with parameters
function firstFactory(param: string) {
  console.log(`firstFactory(): factory evaluated with parameter: ${param}`);
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(
      `firstFactory(): called for method ${key} in ${target.constructor.name}`
    );
    // Use the descriptor, for example, by logging its value
    console.log("Descriptor value:", descriptor);
  };
}

// Decorator factory with parameters
function secondFactory(param: number) {
  console.log(`secondFactory(): factory evaluated with parameter: ${param}`);
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(
      `secondFactory(): called for method ${key} in ${target.constructor.name}`
    );
    // Use the descriptor, for example, by logging its value
    console.log("Descriptor value:", descriptor);
  };
}

// Applying decorators with parameters to the class method
class ExampleClass {
  @firstFactory("Hello")
  @secondFactory(42)
  method() {}
}

// Instantiate the class and call the decorated method
const exampleInstance = new ExampleClass();
exampleInstance.method();
