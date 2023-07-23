// Arrow Function

const createArray = (param: string): string[] => {
  return [param];
};
const createArray1 = <T>(param: T): T[] => {
  return [param];
};

const result1 = createArray("Bangladesh");
const result2 = createArray1<string>("Russia");
const result3 = createArray1<boolean>(true);
const result4 = createArray1<{ name: string }>({ name: "America" });

type Name = { name: string };
const result5 = createArray1<Name>({ name: "Norway" });

const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const result6 = createArray2<string, string>("Bangladesh", "I love my country");
const result7 = createArray2<boolean, string>(
  true,
  "I love my country so much"
);
const result8 = createArray2<boolean, Array<string>>(false, ["Finland"]);

// Spread Operator

// const crush = "Noah";
// const myInfo = {
//   name: "Nick",
//   age: 26,
//   salary: 25552222,
// };

// const newData = { ...myInfo, crush };

const addMeInMyCrushMind = <T>(myInfo: T) => {
  const crush = "Noah";
  const newData = { ...myInfo, crush };
  return newData;
};

const myInfo = {
  name: "Nick",
  age: 25,
  salary: 21555665,
};
const result9 = addMeInMyCrushMind(myInfo);
result9.

// normal function in generic type

function createArray3<X, Y>(params: X, params2: Y): [X, Y] {
    return [params, params2];
  }