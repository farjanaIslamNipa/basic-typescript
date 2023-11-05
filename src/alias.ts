{

  // type alias
  type Person = {  // Here Person is type alias
    id: number,
    name: string,
    roll: string,
    phone: string,
    address?: string
  }

  const student1 : Person = {
    id: 1,
    name: 'Mr. X',
    roll: 'manager',
    phone: '01754896',
    address: 'adfdasf'
  } 
  const student2 : Person = {
    id: 2,
    name: 'Mr. Y',
    roll: 'Director',
    phone: '01754897',
    address: 'adfdasf'
  } 
  const student3 : Person = {
    id: 3,
    name: 'Mr. Z',
    roll: 'CEO',
    phone: '01754898',
    address: 'adfdasf'
  } 


  // type alias in function
  type Add = (a:number, b:number) => number // Here Add is function alias

  const sum : Add = (x, y) => x + y;

  sum(10, 30)


  // name alias
type User = {
  id: number,
  name: {
    fName: string,
    mName: string,
    lName: string,
  },
  contactNo: number
}

const user1 : User = {
  id: 22,
  name: {
    fName: 'ab',
    mName: 'cd',
    lName: 'ef'
  },
  contactNo: 12346
}

const {contactNo : phone, name: {mName : midName}} = user1 // here phone and midName are name alias
console.log(phone, midName)

}