const swapValues = <T>(a: T, b: T): [T, T] => [b, a];

//1
let str1: string = "Hello";
let str2: string = "World";
[str1, str2] = swapValues(str1, str2);
console.log(str1, str2);

//2
let num1: number = 5;
let num2: number = 10;
[num1, num2] = swapValues(num1, num2);
console.log(num1, num2);

//3
type PersonData = {
  name: string;
  age: number;
  city: string;
  isStudent: boolean;
};

let person1: PersonData = {
  name: "AJ",
  age: 25,
  city: "Pune",
  isStudent: true,
};
let person2: PersonData = {
  name: "Jane",
  age: 34,
  city: "Thane",
  isStudent: false,
};
[person1, person2] = swapValues(person1, person2);
console.log(person1, person2);
