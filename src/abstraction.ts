
{

  // normal class

  interface Vehicle1 {
    startEngine():void;
    stopEngine():void;
    move():void;
  }

  class Car implements Vehicle1 {
    startEngine(): void {
        console.log('I am starting')
    }
    stopEngine(): void {
        console.log('I am stopping')
    }
    move(): void {
        console.log('I am moving')
    }
    test():void {
      console.log('I am testing')
    }
  }

  const car = new Car()

  car.startEngine()


  // abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    move(): void {
      console.log('I am movint')
    }
  }

  class Alien extends Car2{
    startEngine(): void {
        console.log('starting')
    }
    stopEngine(): void {
        console.log('stopping')
    }

  }





}






















