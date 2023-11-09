# Assignment One

#Interview Questions:

1. What are some benefits of using TypeScript over JavaScript in a project?
	
  Ans: When we work on a large scale project TypeScript is more beneficial over JavaScript for code maintenance and scalability. TypeScript can helps prevent type-related errors, helps to debug and reduces the risk of security vulnerabilities.

2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each.

	Ans: #optional chaining: when we try to access a value of a property from an object but property doesn’t exist or the value of the property is null or undefined, we get an error. Optional chaining is used to avoid these errors. When optional chaining operator (?.) gets an undefined or null value it stops checking and returns undefined. 
  We can use optional chaining like this:
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


 #nullish coalescing operator: When we get a nullish value we can set an explicit fallback value for that property by using nullish coalescing operator. 
 It could be like following:

 const schoolName = student?.results?.finalTerm ?? 'Result is not published yet'

 
