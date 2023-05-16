// ternary operator
const age: number = 22;

// if (age >= 18) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// Nullish Coalesnace Operator
// it works for only Null and Udefined
const isAuthenticatedUser = undefined;
const userName = isAuthenticatedUser ?? "Guset";
console.log(userName);

const isAuthenticatedUser2 = "";
const userName2 = isAuthenticatedUser2 ?? "guest";
const userName3 = isAuthenticatedUser2 ? isAuthenticatedUser2 : "guest";
console.log({ userName2 }, { userName3 });

type Manus = {
  name: string;
  age: number;
  address: {
    city: "NO City";
    road: "No Road";
    Home?: "";
  };
};

const manus1: Manus = {
  name: "Manus",
  age: 100,
  address: {
    city: "NO City",
    road: "No Road",
  },
};

const home = manus1?.address.Home ?? "No Home"; //default "No Home"
console.log({ home });

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
