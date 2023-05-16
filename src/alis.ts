type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Moina Pakhi",
  age: 22,
  profession: "Web Developer",
  address: "Dhanmondi",
};

const crush2: CrushType = {
  name: "Tia Pakhi",
  profession: "Next Level Developer",
  address: "Narayanganj",
};

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;
const courseName: CourseNameType = "Next Level Web Developemet";

const calculate = (number1: number, number2: number) => {
  return number1 + number2;
};
const sum = calculate(20, 25);
console.log(sum);

// const calculate2 = (
//   number3: number,
//   number4: number,
//   operation: (x: number, y: number) => number
// ) => {
//   return operation(number3, number4);
// };

// const a = calculate2(10, 20, (x, y) => x + y);
// const b = calculate2(10, 20, (x, y) => x - y);
// const c = calculate2(10, 20, (x, y) => x * y);
// const d = calculate2(20, 10, (x, y) => x / y);

// console.log(b);

type OperationType = (x: number, y: number) => number;

const calculate2 = (
  number3: number,
  number4: number,
  operation: OperationType
) => {
  return operation(number3, number4);
};

const a = calculate2(10, 20, (x, y) => x + y);
const b = calculate2(10, 20, (x, y) => x - y);
const c = calculate2(10, 20, (x, y) => x * y);
const d = calculate2(20, 10, (x, y) => x / y);

console.log(b);
