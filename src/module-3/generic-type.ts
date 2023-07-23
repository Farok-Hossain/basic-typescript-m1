const rollNumbers1: Array<number> = [1, 9, 2];
const rollNumbers4: Array<string> = ["2", "5", "3"];
const rollNumbers5: Array<boolean> = [true, false];

const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
  { name: "x", roll: 1 },
  { name: "y", roll: 2 },
];

// Generic type
type GenericArray<T> = Array<T>;
const rollNumbers6: GenericArray<number> = [1, 2, 3];
const rollNumbers7: GenericArray<string> = ["1", "2", "3"];
const rollNumbers8: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };
const userNameAndRollNumbers2: GenericArray<NameRollType> = [
  { name: "x", roll: 1 },
  { name: "y", roll: 2 },
];

type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Nick", "Noah"];

const relationWithSalary: GenericTuple<
  { name: string; salary: number },
  string
> = [{ name: "Nick", salary: 1500000 }, "Noah"];
