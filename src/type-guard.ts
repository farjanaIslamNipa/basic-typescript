{

// typeof guard
type Alphanumeric = string | number

const add = (param1:Alphanumeric, param2:Alphanumeric) : Alphanumeric => {
  if(typeof param1 === 'number' && typeof param2 === 'number'){
    return param1 + param2
  }else{
    return param1.toString() + param2.toString()
  }
}

const result1 = add(10, 2)
console.log(result1)


// in guard
type NormalUser = {
  name: string
}

type AdminUser = {
  name: string;
  role: 'admin'
}

const getUser = (user: NormalUser | AdminUser) => {
  if('role' in user){
    console.log(`I am ${user.name} and my role is ${user.role}`)
  }else{
    console.log(`I am ${user.name} and my role is not admin`)
  }
}

const user1:NormalUser = {
  name: 'Mr. Abul'
}

const user2:AdminUser = {
  name: 'Mr. Kabul',
  role: 'admin'
}

getUser(user2)


// instance of guard
class Animal {
  name: string;
  species: string;


  constructor(name: string, species: string){
    this.name = name
    this.species = species
  }

  makeSound(){
    console.log(`I am making sound`)
  }

}

class Dog extends Animal { //Here Dog is inheritance
    constructor(name: string, species: string){
      super(name, species)
    }

    makeBark(){
      console.log(`I am barking`)
    }
}


class Cat extends Animal {   //Here Cat is inheritance
  constructor(name: string, species:string){
    super(name, species)
  }

  makeMeow(){
    console.log(`I am mewoing`)
  }
}

const isDog = (animal: Animal) : animal is Dog => {
  return animal instanceof Dog
}

const isCat = (animal: Animal) : animal is Cat => {
  return animal instanceof Cat
}

const getAnimal = (animal: Animal) => {
  if(isDog(animal)) {
    animal.makeBark()
  }else if(isCat(animal)) {
    animal.makeMeow()
  }else{
    animal.makeSound()
  }
}

const dog = new Dog( 'Dog vai', 'dog'); //Here dog and cat are instances
const cat = new Cat( 'Cat vai', 'cat');

getAnimal(dog)
getAnimal(cat)


}

