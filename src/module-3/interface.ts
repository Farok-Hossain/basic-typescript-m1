type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

const user1: IExtendedUser = {
  name: "Farok Hossain",
  age: 26,
  role: "Web Developer",
};

const user2: extendedUser = {
  name: "Zohir",
  age: 26,
  role: "web developer",
};

// function, object, array, they are one kind of object. For these type we use interface otherwise we use type alias

type addNumbersType = (num1: number, num2: number) => number;

const addNumbers: addNumbersType = (num1, num2) => num1 + num2; // type alias

interface IAddNumbers {
  (num3: number, num4: number): number;
}
const addNumbers2: IAddNumbers = (num3, num4) => num3 + num4; // type interface but for function we use type alias because it clean and read able when we see code

// Array
type rollNumbersType = number[];
const rollNumbers2: rollNumbersType = [1, 5, 3, 4];

interface IRollNumbers {
  [index: number]: number;
}
const rollNumbers3: IRollNumbers = [1, 5, 2, 3, 4];
