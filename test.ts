class Base{
  constructor(public firstName: string, public lastName: string){
  }
  protected get fullName(){
    return this.firstName + " " + this.lastName
  }
}

class Child extends Base{
  override get fullName(){
    return "Child " + this.firstName + this.lastName
  }
}
class Child2 extends Base{
  override get fullName(){
    return "Child 2 " + this.firstName + this.lastName
  }
}

// function printName(name: Base[]){
//   name.forEach(function(obj){
//     console.log(obj.fullName)
//   })
// }

// printName([
//   new Child('one', '1'),
//   new Child2('two', '2'),
// ])

const a = new Child('one', '1')
  const b = new Child2('two', '2')

//   printName([
//   a,
//   b
// ])
console.log(b.fullName)