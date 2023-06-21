let emni: any;

emni = "Next Level Web Development";

(emni as string).length; // or   <string>emni.length;  2 rules are same but 1st rule is better than second

function kgToGram(
  param: string | number | undefined
): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted result is: ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(10) as number;
const resultToBeString = <string>kgToGram("20");

console.log(resultToBeNumber);
console.log(resultToBeString);

type CustomErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomErrorType).message);
}
