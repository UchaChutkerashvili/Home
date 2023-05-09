// Task 1
let users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

let smallestAge = users[0].age;

function youngestMemberFinder(users) {
  users.forEach(function (user) {
    if (user.age < smallestAge) {
      smallestAge = user.age;
      console.log(user.name);
    }
  });
}
youngestMemberFinder(users);

// Task 2
const user = {
  firstName: "James",
  lastName: "Bond",
  age: 32,
};

 function newObject(user) {
  
   let user2 = user
   return user2
}
newObject(user)
console.log(newObject(user))


// Task 3
function randomDice() {
      return Math.floor((Math.random() * 6) + 1);      
}
let resultA = randomDice();
let resultB = randomDice();

let countA = 0;
let countB = 0;

while(resultA !==3) {
  resultA = randomDice()
  countA++
 
}
while(resultB !==3) {
  resultB = randomDice()
  countB++
}
if (countA > countB) {
  console.log('a is a Winner')
} else {
  console.log('b is a Winner')
}