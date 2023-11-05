{


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

const {contactNo : phone, name: {mName : midName}} = user1 // here phon and midName are alias
console.log(phone, midName)

}