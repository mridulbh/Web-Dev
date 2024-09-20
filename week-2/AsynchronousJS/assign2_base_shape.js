class Shape{
    constructor(color){
        this.color = color;
    }
    paint (){
        console.log(`Painting with color : ${this.color}`);
    }
    area(){
        throw new Error (`The area method must be called from the subclass`);
    }
}

class Rectangle extends Shape{
    constructor(width,height, color){
        super(color) // call the parent class costructor first to set  the color before accessing 'this' or returning from derived construcor 
        this.width = width;
        this.height = height;
    }    
    area(){
        return this.width * this.height;
    }

    getdescription(){
        return `A rectangel with width: ${this.width},height:${this.height} , color: ${this.color}`;
    }
}

class Circle extends Shape{
    constructor(radius,color){
        super(color);
        this.radius= radius;
    }
    area(){
       return Math.PI * this.radius * this.radius;
    }
}

const rect = new Rectangle(2,4);
console.log(rect.area());
console.log(rect.getdescription());
const shape = new Shape("red");
shape.paint();
const cir = new Circle(4);
console.log(cir.area());



