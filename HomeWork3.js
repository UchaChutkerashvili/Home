// Task 1
const result = (num1,num2, ...args) => {
  let sum = num1+num2;
  let multiplicationResult = 1;
  for (const num of args) {
    multiplicationResult = multiplicationResult*num
  }
  return [sum, multiplicationResult]
}

console.log(result(2,2,4,5,2,3))

//Task 2
const user = {
  banks: [
    {
      address: {
        city: 'Tbilisi'
      }
    },
    {
      address: {
        city: 'Batumi'
      }
    },
    {
      address: {
        city: 'Gori'
      }
    },
  ]
}
const city = ({banks: [, , {address: {city}}] }) =>{
  console.log(city)
  
}
city(user);

//Task 3
const person = {
  firstname: 'james',
  lastName: 'Bond',
  profile: {
    age: 40,
    nickname: '007'
  },
  
}
const object2 = (object) => {
  const newObject= {
    ...object
  }
  for(const fn in object) {
    if(typeof object[fn] === 'object') {
      newObject[fn] = {...object[fn]}
    }
  }
  return newObject
}
const person2 = object2(person)

console.log(person2)