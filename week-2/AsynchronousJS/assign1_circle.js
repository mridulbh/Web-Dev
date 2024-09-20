// class Rectangle { 
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }   

//     area(){
//         const area = this.width * this.height;
//         return area;
//     }
//     paint() { 
//         console.log(`Painting with color ${this.color}`);
//     }
// }

// const rect = new Rectangle(2,4,"red")
// const area = rect.area();
// rect.paint();
// console.log(area);
// const rect2 = new Rectangle(2,20,"blue")
// const area2 = rect2.area();
// rect2.paint();
// console.log(area2);


class Circle {
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    paint(){
        console.log(`Painting with color ${this.color}`);
    }

    area(){
        const area = Math.PI * this.radius * this.radius;
        return area;
    }
}

const cir = new Circle(2,"blue");
const area = cir.area();
console.log(area);
cir.paint();
