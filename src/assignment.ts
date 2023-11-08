{



  // Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.


  // Problem 1

type StringOrNumber = string | number

const modifier = (param:StringOrNumber) : StringOrNumber => {
  if(typeof param === 'number'){
    return param * param
  }else{
    return param.length
  }
}

// const result1 = modifier(200)
// console.log(result1)

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------


// Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

// Problem 2
// HAVE TO CHECK AGAIN

interface Person {
  name: string;
  address?:{
    city: string;
    street: string;
  }
  phone?: number
}

const user: Person = {
  name: 'Mr. X',
  address: {
    city: 'Dhaka',
    street: '10A'
  },
  phone: 1234567
} 

const getAddressCity = (person: Person) : string => {
  return person?.address?.city ?? 'No city found'
}

// const getCity = getAddressCity(user)
// console.log(getCity)

// --------------------------------------
// --------------------------------------



// Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

// Problem 3


class Cat {
  constructor(public name: string, public color: string){}
}

const isCat = (animal: Cat) : animal is Cat => {
  return animal instanceof Cat;
}

const petCat = new Cat('Persian', 'white')

const checkSpecies = (petAnimal : Cat) : string => {
  if(isCat(petAnimal)) {
    return "Yes, it's a cat"
  }else return "No, it's not a cat"
}

// let checkCat = checkSpecies(petCat) 

// console.log(checkCat)

// class PetAnimal {
//   constructor(public name: string, public color: string){}
// }

// class Cat extends PetAnimal {
//   constructor(name: string, color:string){
//     super(name, color)
//   }
// }
// class Dog {
//   constructor(public name: string, public color: string){}
//   makeSound(){
//        console.log(`${this.name} says meaow meaow`)
//      }
// }

// const isCat = (animal: Cat) : animal is Cat => {
//   return animal instanceof Cat;
// }

// const petCat = new Cat('Persian', 'white')
// const petDog = new Dog('Persian', 'white')

// const checkSpecies = (petAnimal : Cat) : string => {
//   if(isCat(petAnimal)) {
//     return "Yes, it's a cat"
//   }else return "No, it's not a cat"
// }

// let checkCat = checkSpecies(petCat) 
// let checkDog = checkSpecies(petDog)

// console.log(checkCat, checkDog)




// You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the sum by adding them up.

// To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

// Every time you find a number in the list, you'll add it to a sum. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

// Problem 4

type NumberOrWord = number | string

let mixedData : NumberOrWord[] = [ 10, 'ten', 20, 'twenty', 30, 'thirty', 0 ]

const getSumOfNumbers = (mixedList : NumberOrWord[]) : number => {
  let sum = 0
  for (let i = 0; i < mixedList.length; i++) {
    const element = mixedList[i];
    if(typeof element === 'number'){
      sum += element
    }
  }
  return sum as number;
}


const sumNum = getSumOfNumbers(mixedData)
console.log(sumNum)


}