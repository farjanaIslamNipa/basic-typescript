# Assignment One

#Interview Questions:

<b>1. What are some benefits of using TypeScript over JavaScript in a project?</b>
	
    <b>Ans:</b> When we work on a large scale project TypeScript is more beneficial over JavaScript for code maintenance and scalability. TypeScript can helps prevent type-related errors, helps to debug and reduces the risk of security vulnerabilities.

<b>2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each.</b>

	<b>Ans:</b> <b>#optional chaining:</b> when we try to access a value of a property from an object but property doesn’t exist or the value of the property is null or undefined, we get an error. Optional chaining is used to avoid these errors. When optional chaining operator (?.) gets an undefined or null value it stops checking and returns undefined. 
  We can use optional chaining like this:
  
  <pre>
    const student = {
        name: 'Mahbir',
        age: 12,
        class: 'two',
        results: {
        firstTerm: 4.8,
        secondTerm: 5
      } 
    }

    const schoolName = student?.results?.finalTerm
  </pre>


 <b>#nullish coalescing operator:</b> When we get a nullish value we can set an explicit fallback value for that property by using nullish coalescing operator. 
 It could be like following:

 <pre>const schoolName = student?.results?.finalTerm ?? 'Result is not published yet'</pre>


<b>3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.</b>

  <b>Ans:</b>Handling asynchronous operations in Typescript can be explained through some examples.
  
   In the bellow example syntax, async keyword is used before the function to make it asynchronous. And the await keyword blocked the execution of the function until it get a response from the promise.

  So, await keyword only suspends the execution of the asynchronous function, and other code can continue execution. Once the promise resolves, it starts execution again.

  <pre>
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
  </pre>

  Here is another example to explain different uses of asynchronous operation.
  In this example, the createPromise() function contains the promise. Promise constructor is used to create and resolve the promise. Also, returned the promise from the createPromise() function.
  <pre>
      type SomeThing = { something: string }

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
  </pre>
  
  <b>#Advantages of using async/await</b>
  Async/await is syntax built on top of promises. Async/await is much cleaner syntax, more readable and concise than promise. It increases the readability of code. With Async/await error can be handled in a more elegant way. It has a built-in error handling feature with try catch block.

  <b>4. How can you use TypeScript's enums, and what are their advantages?.</b>

  <b>Ans:</b>Enum can be used like bello example:
  <pre>
    enum Status {
      SHIPPED,
      ONGOING,
      DELIVERED
    }

    const orderStatus :
          {
            sl: number;
            status: number;
            type: Status
          } = {
            sl: 11,
            status: 200,
            type: Status.ONGOING
          }
  </pre>

  <b>#Advantage of enum:</b> Enums Reduces errors caused by mistyping numbers, easy to change value in the future. It used to store constants.

  <b>Explain the role of type guards in TypeScript and provide an example of a custom type guard.</b>
  
  <b>Ans:</b> We can narrow down the type of an object within a conditional block by using type guards. In type guard instance of and typeof operators are used to check the type. Type guard prevents runtime errors which may occur due to incorrect types.

  Here is an example of custom type guard.

  <pre>
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
          console.log('Animal not found')
        }
      }

      const dog = new Dog( 'German Shepherd', 'dog');

      getAnimal(dog)
  </pre>


<b>Can you give an example of how to use "readonly" properties in TypeScript?</b>

  <b> Here is an example of "readonly" property in TypeScript</b>

  <pre>
    class Employee {
        readonly id: number;
        name: string;
        
        constructor(code: number, name: string)     {
            this.id = code;
            this.name = name;
        }
    }
    let employee = new Employee(22, "Nawshad");
    employee.id = 20; //Compiler Error
    employee.name = 'Sadman'; 
  </pre>

  Here employee id couldn't be change because of readonly property.

  <b>Explain what a union type is in TypeScript and provide an example of its usage.</b>

  <b>Ans:</b>A union type defines a value that can be one type of several types. With union type we can use more than one data type for a variable of a function parameter.

  Example of Union:
  <pre>
    
    const display(param: number | string)  =>{  
              if(typeof(param) === "number")  
                  console.log('The given value is of type number.');  
              else if(typeof(param) === "string")  
                  console.log('The given value is of type string.');  
              }  
      display(808);  
      display("Mahbir");  
  </pre>