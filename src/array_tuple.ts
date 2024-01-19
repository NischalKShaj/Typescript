// declaring the empty array
let arr: number[] = []; //mention its type also

// initialising an array
let arr2 = ["a", "s", "d"];


// tuples 
let arr3:[number , string]=[1,"nischal"];
arr3.push(4)   //this is an issue with the type script that is we fixed the size and the datatype but still we are able to insert another value;
console.log(arr3);


// enum 
enum Size {Small,Medium,Large};
let mySize = Size.Medium;
console.log(mySize);
