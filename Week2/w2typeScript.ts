// // Primitive types
// let name: string = "Alice";
// let age: number = 30;
// let isActive: boolean = true;
// let nothing: null = null;
// let notDefined: undefined = undefined;

// // Arrays
// let numbers: number[] = [1, 2, 3];
// let names: Array<string> = ["Alice", "Bob"]; // generic form and also //let names: string[] = ["Alice", "Bob"];

// // Tuple (fixed-length array with known types)
// let person: [string, number] = ["Alice", 30];

// // Any (escape hatch — avoid when possible)
// let anything: any = "hello";
// anything = 42;

// // Unknown (safer alternative to any)
// let value: unknown = "hello";
// // You must narrow the type before using it
// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// }

// // Void (for functions that return nothing)
// function log(message: string): void {
//   console.log(message);
// }

// // Never (functions that never return — e.g., throw or infinite loop)
// function fail(message: string): never {
//   throw new Error(message);
// }


let myName: string = "Yabesh"
console.log(myName)


// // object
let obj: {name: string} = {
  name: "John"
};
console.log(obj.name);

// reusable structures in TS object
type User = {
  name: string,
  age: number
};

let user: User = {
  name: "John",
  age: 20
};

console.log(user.name);



// // interface

interface User {
  id: number;
  name: string;
  email?: string;              // optional property
  readonly createdAt: Date;    // cannot be changed after creation
  greet(): string;             // method
}

const user1: User = {
  id: 1,
  name: "Alice",
  createdAt: new Date(),
  greet() {
    return `Hello, ${this.name}`;
  }
};

console.log(user1.createdAt);
console.log(user1.greet());



// // capabilities of interface

// inheritance
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = { 
  name: "Rex", 
  breed: "Labrador" 
};

console.log(dog.name);
console.log(dog.breed);



//MultipleInheritance
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Duck extends Flyable, Swimmable {
  quack(): void;
}



// You can declare the same interface name multiple times and TypeScript will merge them:

interface Window {
  title: string;
}

interface Window {
  isOpen: boolean;
}
// Resulting type is { title: string; isOpen: boolean }
