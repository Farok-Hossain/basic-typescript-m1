type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;
};

// union type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Moznu Mia",
  expertise: "React",
  experience: 2,
};

type NoobDeveloper1 = {
  name: string;
};

type JuniorDeveloper1 = NoobDeveloper & {
  expertise: string;
  experience: number;
};

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: string;
};

const newDeveloper1: NoobDeveloper1 | JuniorDeveloper1 = {
  name: "Moznu Mia",
  expertise: "React",
  experience: 2,
};

// intersection
const developer: NextLevelDeveloper = {
  name: "Karim Vai",
  expertise: "Typescript",
  experience: 1,
  leadershipExperience: 1,
  level: "Mid Level",
};
