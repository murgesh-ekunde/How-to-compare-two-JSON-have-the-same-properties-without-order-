

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age :5 , name:"Person 1"};

//fetch properties
let prop1 = Object.getOwnPropertyNames(obj1);
let prop2 = Object.getOwnPropertyNames(obj2);

//will loop in for loop, iterating the list of properties and then comparing their values
for (let i = 0; i <obj1.length; i++) {
    let obj = obj1[i];
    
    if (obj1[prop] !== obj2[prop]) {
        console.log("false");
    }
  }
  console.log("true");
