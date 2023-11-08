{

  // When we understand type better from typescript or sure about any type that is type assertion

  let anything : any;

  anything = 'this is a string';

  (anything as string)


  const kgToGm = (value: number | string) : number | string | undefined => {
    if(typeof value === 'string') {
      return parseFloat(value)*1000
    }
    if(typeof value === 'number') {
      return value * 1000
    }
  }

  const result1 = kgToGm(20) as number;
  const result2 = kgToGm(20) as string;




}