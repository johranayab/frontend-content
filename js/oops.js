// class Person{
// constructor(){
//     this.name="JOPHRA"

// }
// printMyName(){
//     console.log(this.name);
    
// }
// }
// let person=new Person();
// console.log(Person);


// console.log(person);



// class Person{
    // constructor(){
    //   this. name="JOPHRA"
    
    // }
    // printMyName(){
    //     this.name="laiba";
    //     console.log(this.name);
    //     console.log(this.printMyName);
        
        
    // }
    // }
    // let person=new Person();
  
    // console.log(person);
    
    
    // console.log(person);
 
    class Human{
        constructor(){
            this.eat=true;
        }
        printHabbit(){
            console.log(this.eat);
            
        }
    }
class Person extends Human{
    constructor(){
        super();
        this.name="johra",
        this.age=22
    }
}

const person= new Person();

console.log(person);
person.printHabbit()

console.log(person.age);
console.log(person.eat);


class Car{
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year-year;
    }
    startEngin(){
        console.log( `${this.brand} ${this.model} ${this.year} has start`);
        
    }
    stop(){
        console.log(`${this.brand} ${this.model}  ${this.year} cr has been stopped .....!`);
        
    }

}
let car= new Car("toyota","camery",)
console.log(car);
car.startEngin()
car.stop()


