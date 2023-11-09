{

  type Todo = {
    id: number,
    userId: number,
    title: string,
    completed: boolean
  }
  const getTodo = async(): Promise<Todo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    return data;
  }
getTodo();


  type SomeThing = { something: string }
  // simulate
  const createPromise = ():Promise<SomeThing> => {
    return new Promise<SomeThing>((resolve, reject) =>{
      const data: SomeThing = { something: "some data" }
      if(data){
        resolve(data)
      }else{
        reject("failed to load data")
      }
    })
  }

  // calling create promise function
  const showData = async () : Promise<SomeThing> => {
    const data : SomeThing = await createPromise()

    return data
  }
  showData()





}

