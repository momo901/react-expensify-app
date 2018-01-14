class Person {
    constructor(name= "anonymous",age){
        this.name = name;
        this.age=age;
        
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
    getGreeting(){
            let known = `Hello there !. My name is ${this.name} `;
            if(this.age){
              known+=`i'm ${this.age}`;
             }else{
                 known;
             }
             return known;
    }

}

class Travel extends Person{
    constructor(name, age, location){
        super(name,age);
        this.location=location;
    }
    getGreeting(){
        let Greeting = super.getGreeting();
        if (this.location){
            Greeting +=` i live in ${this.location}` ;
           
        }
         return Greeting;

    }
}

const p1 = new Travel('aarab Mohammed',27,'Berkane');
const p2 = new Travel();
console.log(p1.getGreeting());
console.log(p2.getGreeting());