{


class Shape {
  getArea(): number{
    return 0;
  }
}

class Circle extends Shape{
  constructor(public radius: number){
    super()
  }
  getArea(): number {
      return Math.PI * this.radius * this.radius
  }
}
class Rectangle extends Shape{
  constructor(public height: number, public width: number){
    super()
  }
  getArea(): number {
      return this.height * this.width
  }
}

const getShape = (instance: Shape) => {
  console.log(instance.getArea())
}

const shape1 = new Shape();
const shape2 = new Circle(20);
const shape3 = new Rectangle(50, 50);

getShape(shape1)
getShape(shape2)
getShape(shape3)

}