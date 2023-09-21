// Topic Type Assertion
// I know more about type


// HTMLElement class
let phone = document.getElementById("phone") as HTMLInputElement
// or
let phone2 = <HTMLInputElement> document.getElementById("phone2")

// Type unknown
function render(document: unknown){
  if(typeof document === 'string'){
    document.toUpperCase()
  }
  // document.move()
}

// Never Type
// this method never return anything or never ends
function processEvents(): never{
  while(true){
    // read a message
  }
}

processEvents() 
// unreachable code
console.log("Hello world")
