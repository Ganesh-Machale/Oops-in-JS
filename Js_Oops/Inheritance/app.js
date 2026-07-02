class Mammal{
    constructor(name){
        this.name = name ;
         this.type = "Warm-Blooded";
    }
     eat(){
         console.log("I AM Eating");
     }
}
 class Dog extends Mammal{
     constructor(name){
        super(name);
     }
     bark(){
       console.log("Woof..");
     }
     eat(){
        console.log("Dog is eating ");
     }
 }

   class Cat extends Mammal{
    constructor(name){
        super(name);
    }
      Meow(){
        console.log("meow...");
      }
}
