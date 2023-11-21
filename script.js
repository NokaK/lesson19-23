getSum(4, 5);
function getSum(a, b) {
  return a + b;
}

const getSum1 = function () {
  console.log("Hello");
};
getSum1();

let text1 = "Hello";
let text2 = "World";

console.log(text1.toUpperCase());

const convertToUpperCase = function (text) {
  return text.toUpperCase();
};
convertToUpperCase("Hello");
convertToUpperCase("World");
convertToUpperCase("JavaScript");

const numberArray = [1, 2, 3, 4, 5];
const filterByOddNumbers = numberArray.filter((number) => number % 2 !== 0);
console.log(filterByOddNumbers);

const personsArray = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Ann",
    age: 20,
  },
  {
    name: "Jane",
    age: 17,
  },
];
const studentsArray = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Ann",
    age: 20,
  },
  {
    name: "Jane",
    age: 17,
  },
];

let name = "Ann";
const findPerson = (array, name) => {
  const findItem = array.find((person) => {
    return person.name === name;
  });
  return findItem;
};

const namesArray = ["John", "Ann", "Jane"];
const numbersArray = [1, 2, 3, 4, 5];
findPerson(personsArray, 4);
findPerson(namesArray, "Jane");
