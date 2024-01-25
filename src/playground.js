const fruit = ["Orange", "Banana", "Apple"];
const vegitables = ["Cucumber", "Radish"];

console.log([...fruit, ...vegitables]);

// ... this symbole is used for merging of two array

console.log("================================================================");

const developer = {
  salary: 100000,
  experience: 4.5,
  techStack: ["vue", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};

console.log(developer.salary);
console.log(developer.lookingForWork);

developer.doubleSalary();

console.log(developer.salary);
console.log(developer.lookingForWork);

console.log("================================================================");

export const checkEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
export const multiplay = (x, y) => {
  let total = 0;
  for (let i = 1; i <= y; i++) {
    total = total + x;
  }
  return total;
};
