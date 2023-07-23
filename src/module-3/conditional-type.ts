// a type is dependent on another type

type a1 = string;
type a2 = a1 extends string ? string : null;

type a3 = undefined;
type a4 = number;

type a5 = a1 extends string
  ? string
  : a3 extends null
  ? null
  : a4 extends undefined
  ? undefined
  : never;

type Habibi = {
  wife1: string;
  wife2: string;
};

// check korbe ei habibi Type a wife2 ase kina ? true: false;

type CheckProperty<T> = T extends { wife2: string } ? true : false;

type CheckWife2 = CheckProperty<Habibi>;

type CheckProperty2<T, Y> = Y extends keyof Habibi ? true : false;

type CheckWife1 = CheckProperty2<Habibi, "wife3">;

type Bandhubi = "Monika" | "Rachel" | "Noah";
type RemoveBandhubi<T> = T extends "Rachel" ? never : T;
type CurrentBandhubi = RemoveBandhubi<Bandhubi>;

// another way
type Bandhubi2 = "Monika" | "Rachel" | "Noah";
type RemoveBandhubi2<T, K> = T extends K ? never : T;
type CurrentBandhubi2 = RemoveBandhubi2<Bandhubi2, "Noah">;
