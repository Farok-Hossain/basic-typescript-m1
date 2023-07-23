// Generic Interface

interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush10: CrushInterface<boolean, string> = {
  name: "Noah",
  husband: true,
  wife: "Tessa",
};

const crush11: CrushInterface<string> = {
  name: "Noah",
  husband: "Nick",
};

interface HusbandInterface {
  name: string;
  salary: number;
}

const crush12: CrushInterface<HusbandInterface> = {
  name: "Noah",
  husband: {
    name: "Nick",
    salary: 1325644,
  },
};

interface PersonInterface {
  name: string;
  age: number;
}
const crush13: CrushInterface<PersonInterface, PersonInterface> = {
  name: "Noah",
  husband: {
    name: "Nick",
    age: 28,
  },
  wife: {
    name: "Tessa",
    age: 25,
  },
};

// const rollNumbers1: Array<number> = [1, 9, 2];
// const rollNumbers4: Array<string> = ["2", "5", "3"];
// const rollNumbers5: Array<boolean> = [true, false];

// const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
//   { name: "x", roll: 1 },
//   { name: "y", roll: 2 },
// ];

// // Generic type
// type GenericArray<T> = Array<T>;
// const rollNumbers6: GenericArray<number> = [1, 2, 3];
// const rollNumbers7: GenericArray<string> = ["1", "2", "3"];
// const rollNumbers8: GenericArray<boolean> = [true, false];

// type NameRollType = { name: string; roll: number };
// const userNameAndRollNumbers2: GenericArray<NameRollType> = [
//   { name: "x", roll: 1 },
//   { name: "y", roll: 2 },
// ];

// type GenericTuple<X, Y> = [X, Y];
// const relation: GenericTuple<string, string> = ["Nick", "Noah"];

// const relationWithSalary: GenericTuple<
//   { name: string; salary: number },
//   string
// > = [{ name: "Nick", salary: 1500000 }, "Noah"];
