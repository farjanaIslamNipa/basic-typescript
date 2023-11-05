{
  const user ={
  name: 'abc',
  age: 20,
  address: "Dhaka"
}

const car = {
  model: "xyz",
  price: 1200
}

const getPropertyValue = <X, Y extends keyof X>(obj:X, key:Y) => {
  return obj[key];
}

console.log(getPropertyValue(user, 'address'))
}

