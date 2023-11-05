{


  type Vehicle = {
    bike: string,
    car: string,
    plane: string
  }

  type X = null
  type Y = undefined

  type CheckVehicle<T> = T extends keyof Vehicle ? true : false

  type hasVehicle = CheckVehicle<'bike'>


  // mapped type

  type AreaType = {
    height: number,
    width: number,
  }

  type Height = AreaType["height"] //look up type

  type AreaNumber = {
    height: number,
    width: number,
  }

  type AreaString<T> = {
    [ key in keyof T ] : T[key]
  }

  const area1: AreaString<{height: string, width:number}> = {
    height: '100',
    width: 20
  }


  // Utility

  type Person = {
    name: string,
    age: number,
    email?: string,
    contactNo: number
  }

  type NameAge = Pick<Person, "name" | "age">

  type ContactInfo = Omit<Person, "name" | "age">

  type PersonRequired = Required<Person>
  type PartialRequired = Partial<Person>

  type PersonReadonly = Readonly<Person>

  const person1 : PersonReadonly = {
    name: 'abc',
    age: 32,
    contactNo: 12345
  }

  type MyObj = Record<string, string>

  const obj1: MyObj = {
    a: 'aa',
    b: 'bb'
  }
}