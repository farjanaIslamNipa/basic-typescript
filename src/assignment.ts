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


// const sumNum = getSumOfNumbers(mixedData)
// console.log(sumNum)

// ---------------------------------------------------------
// ---------------------------------------------------------



// Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

// Problem 5
interface Car {
  make: string;
  model: string;
  year: number;
}

interface Driver {
  name: string;
  licenseNumber: number;
}


interface CarWithDriver extends Car, Driver{}

const car : Car = {
  make: 'SUV',
  model: 'z2013',
  year: 2020
}

const driver : Driver = {
  name: 'John',
  licenseNumber: 2021345
}

const getCarWithDriver = (obj1 : Car, obj2 : Driver) : CarWithDriver => {
  let combinedValue : CarWithDriver =  {...obj1, ...obj2}

  return combinedValue;
}

// let value = getDetail(car, driver)
// console.log(value)

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------



// Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

// Problem 6

const numberArray = [5, 7, 8, 12];
const stringArray = [ 'nitu', 'nipa', 'rupa', 'bipa' ];

const isNumberArray = (param : any) : boolean => {
  return Array.isArray(param) && param.every(item => typeof item === "number");
}

// let num = isNumberArray(stringArray);
// console.log(num, 'num')
const throughError = (msg:string) : never => {
  throw new Error(msg);
}
const checkNumberArray = (arr : unknown) => {
  try{
    if(isNumberArray(arr)) {
      let receivedArray = arr as number[]
      let sumNum = receivedArray.reduce((a: number, b: number) : number => a + b, 0)
      console.log(sumNum)
     }
  }catch(error){
    console.error('The array is not a number type array');
  }


} 

checkNumberArray(stringArray)

// -------------------------------------------------------------------
// -------------------------------------------------------------------

// Problem 7

// Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

// Example usage:<>



const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber : number = 8;

const targetString = "cherry";

type ParamArray = []

const findFirstOccurrence = <T, U>(arr : T, value: U ) => {
    if((arr as ParamArray).includes(value)){
      return (arr as ParamArray).indexOf(value)
    }else return -1
}

const indexInNumbers = findFirstOccurrence<number[], number>(numbers, targetNumber);

const indexInStrings = findFirstOccurrence(strings, targetString);

// console.log(indexInNumbers); //output:  1

// console.log(indexInStrings); //output: 2


// Problem 8

// Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.
type ProductArray<T> = Array<T>
interface Product {
  name: string;
  price: number;
  quantity: number;
}

const groceryItems: ProductArray<Product> = [
  {
    name: 'egg',
    price: 20,
    quantity: 5
  },
  {
    name: 'onion',
    price: 160,
    quantity: 20
  },
  {
    name: 'banana',
    price: 120,
    quantity: 10
  },
]

const getTotal = (products : ProductArray<Product>) : number => {
  let productsPrice = products.map(product => product.price);
  let totalPrice = productsPrice.reduce((a, b) => a + b, 0);
  return totalPrice;
}

// let total = getTotal(groceryItems)
// console.log(total)
class Dog { 
  constructor(public name: string, public species: string){}
}

const isDog = (animal: Dog) : animal is Dog => {
return animal instanceof Dog
}

const getAnimal = (animal: Dog) => {
if(isDog(animal)) {
  return animal.name
}else{
  return 'Animal not found'
}
}

const dog = new Dog( 'German Shepherd', 'dog');

 let dogName = getAnimal(dog)
 console.log(dogName)
}