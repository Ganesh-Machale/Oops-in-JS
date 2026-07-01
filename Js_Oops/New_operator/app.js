 function Person(name,age){
     this.name = name ;
      this.age = age ;
 }

    Person.prototype.talk = function(){
         console.log("Hi my name is ",this.name );
    }

      let p1 = new Person("Ganesh",19);
      let p2 = new Person ("Nanduraj",19);

       console.log(p1);