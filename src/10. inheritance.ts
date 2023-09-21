// inheritance

class Person{
  constructor(public firstName: string, public lastName: string){

  }

  get fullName(){
    return this.firstName + " " + this.lastName
  }

  walk(){
    console.log("Walking")
  }
}

class Student extends Person{
   
}

const obj = new Student("Asad", "ali")

