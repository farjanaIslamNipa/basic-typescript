{

type ArrType = {
  id: number;
  name: string;
  role: string;
  phone?: number;
}


const arr : ArrType[] = [
  {id: 1, name: 'mr. x', role: 'manager', phone: 1234},
  {id: 2, name: 'mr. y', role: 'director', phone: 1235},
  {id: 3, name: 'mr. z', role: 'ceo', phone: 1233},
]


const getElements = (array : ArrType[], element) => {
  
  let elm = array.map(el => Object.keys(el))
  console.log(elm)
  if(elm.includes(element)){
    
    return 1;
  }else{
    console.log('called')
    return '2';
  }


}
getElements(arr, 2)





}