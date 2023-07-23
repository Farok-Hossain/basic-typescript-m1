type MandatoryTypes = { name: string; age: number; salary: number };
interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}

const addMeInMyCrushMind1 = <T extends MandatoryInterface>(myInfo1: T) => {
  const crush = "Noah";
  const newData = { ...myInfo1, crush };
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};

const myInfo1 = {
  name: "Nick",
  age: 25,
  salary: 21555665,
  other1: false,
  other2: null,
};
const result10 = addMeInMyCrushMind(myInfo1);
result9.age;

// normal function in generic type

function createArray3<X, Y>(params: X, params2: Y): [X, Y] {
  return [params, params2];
}
