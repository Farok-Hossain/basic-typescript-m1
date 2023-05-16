// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

const sum = add(44, 63);
console.log(sum);

// arrow function
const addArrow = (num3: number, num4: number): number => num3 + num4;
const amount = addArrow(50, 26);
console.log(amount);

const arr = [1, 5, 6];
const newArray = arr.map((element: number) => element * element);

// rule:1
const person: {
  name: string;
  balance: number;
  addBalance(money: number): number;
} = {
  name: "Mezba",
  balance: 10,
  addBalance(money: number) {
    return this.balance + money;
  },
};

// rule:2
const person2: {
  name: string;
  balance: number;
  addBalance(money: number): string;
} = {
  name: "Mezba",
  balance: 10,
  addBalance(money: number) {
    return `My new balance is ${this.balance + money}`;
  },
};

// rule:3
const person3: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Mezba",
  balance: 10,
  addBalance(money: number) {
    console.log(`My new balance is ${this.balance + money}`);
  },
};

// default parameter: 1st parameter a default value deya jabe na. all time last a parameter a dite hobe
function add2(number1: number, number2: number = 40): number {
  return number1 + number2;
}

add2(30);

//spread operator
const myFriends = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "pheobe"];

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("Kashem", "Hashem", "gasim", "lashem", "karim", "gablu", "dablu");

// array and object destructuring
const myBestFriend = {
  name: "abul bashar",
  age: 24,
};

const [bestFriend] = myFriends;
const { name: fullName } = myBestFriend;
console.log(fullName);
