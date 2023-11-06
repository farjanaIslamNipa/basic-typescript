{
//
// oop -class
  class Employee {
    constructor(public empCode: number, public empName: string, public salary: number) {}

    getSalary() {
        console.log(`${this.empName} gets ${this.salary} taka`)
    }
}

const sarah = new Employee(11, 'sarah', 50000 )

console.log(sarah.empCode)
sarah.getSalary()



// oop- inheritance
  class Person{
    constructor(public name: string, public age: number, public address: string){}
    getSleep(hours : number){
      console.log(`${this.name} sleeps ${hours} per night`)
    }
  }
  class Student extends Person{
    constructor(public name: string, public age: number, public address: string){
      super(name, age, address)
    }
  }
  class Teacher extends Person{
    constructor(public name: string, public age: number, public address: string, designation: string){
      super(name, age, address)
    }
    takeClass(amount : number){
      console.log(`${this.name} takes ${amount} classes`)
    }
  }

  const student1 = new Student('nira', 5, 'rangamati')
  const teacher1 = new Teacher('Tapan', 55, 'rangamati', 'professor')

  //
  // ts-node-dev --respawn --transpile-only ./src/alias.ts
}

