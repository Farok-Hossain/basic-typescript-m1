type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address"; // manually kora hoise

type newTypeUsingKeyOf = keyof PersonType; // keyof use kore union er moto kora jai

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}
const result11 = getProperty({ name: "Nick", age: 25 }, "name");
