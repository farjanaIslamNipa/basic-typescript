{

//
type GenericArray<T> = Array<T>

const numbers: GenericArray<number> = [1, 2, 3, 4, 5, 2];

const strings: GenericArray<string> = ["apple", "banana", "cherry", "date", "apple"];


interface User {
  name: string;
  age: number
}

const user: GenericArray<User> = [{
  name: 'x',
  age: 20
}]

// generic tuple

type GenericTuple<X, Y> = [X, Y]

const person : GenericTuple<string, number> = ['x', 20]

// interface generic

interface Developer<T, X> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  }
  smartWatch: T;
  bike?: X
}

interface Emilab {
  brand: string;
  model: string;
  display: string;
}

const poorDev : Developer<Emilab, null> = {
  name: 'poor',
  computer:{
    brand: 'asus',
    model: 'df',
    releaseYear: 2020
  },
  smartWatch: {
    brand: 'emilab',
    model: 'dss',
    display: 'Oled'
  }

}

interface Apple {
  brand: string;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}

const richDev : Developer<Apple, string> = {
  name: 'poor',
  computer:{
    brand: 'asus',
    model: 'df',
    releaseYear: 2020
  },
  smartWatch: {
    brand: 'apple',
    model: 'dss',
    heartTrack: true,
    sleepTrack: true
  },
  bike: 'Hero'
}



// generic in function
const createArrayWithGeneric = <T>(param: T) : T[] => {
  return [param]
}

const result3 = createArrayWithGeneric<boolean>(true)



class Dog { 
    constructor(public name: string, public species: string){}
}

const isDog = (animal: Dog) : animal is Dog => {
  return animal instanceof Dog
}

const getAnimal = (animal: Dog) => {
  if(isDog(animal)) {
    animal.name
  }else{
    console.log('Animal not found')
  }
}

const dog = new Dog( 'German Shepherd', 'dog');

getAnimal(dog)

//


}