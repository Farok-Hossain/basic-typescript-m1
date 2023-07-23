const arrayofNumbers = [1, 2, 3, 4, 5];
const arrayofStrings = arrayofNumbers.map((number) => number.toString());
console.log(arrayofStrings);

const arrayofLowerCase = ["azad", "farok", "shamim"];
const arrayofUpperCase = arrayofLowerCase.map((string) => string.toUpperCase());
console.log(arrayofUpperCase);

type AreaNumber = {
  height: number;
  width: number;
};

type A = AreaNumber["height"]; // look up types
type B = keyof AreaNumber; // "width" | "height"

type Volume = {
  height: number;
  width: number;
  depth: string;
};

// type Area = {
//   [key in keyof Volume]: string;
// };

// type Area = {
//     [key in keyof Volume]: Volume[key];
//   };

// type Area<T> = {
//   [key in keyof T]: T[key];
// };

// const area1: Area<{ height: number; width: string }> = {
//   height: 10,
//   width: "10",
// };

// area1.height = 12;

type Area<T> = {
  readonly [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: string }> = {
  height: 10,
  width: "10",
};

//   area1.height = 12;
