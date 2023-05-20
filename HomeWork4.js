//11111111111111111111111111111111111111111
const replace = (valueToReplace, valueToReplaceWith) => {
  let string = valueToReplace;
  let string2 = valueToReplaceWith;
  string = string2;
  return string;
};
console.log(replace("string1", "string2"));
//22222222222222222222222222222222222222222
const UpperCase = (text) => {
  let string = text;
  return string.toUpperCase();
};
console.log(UpperCase("jemali"));
//33333333333333333333333333333333333333333
const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
];
const sortedAscending = (users) => {
  return users.sort((a,b) => {return a.age - b.age})
}
console.log(sortedAscending(users))