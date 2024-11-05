// function constructorArgument(name, age, occupation) {
//   // You only need to implement this function and also create a constructor.
//   return {
//     name = name,
//     age = age,
//     occupation = occupation,
//   };
// }

// const person1 =  constructorArgument("John", 25, "Engineer");


function ConstructorFunction(name, age, occupation) {
  // You only need to implement this function and also create a constructor.
  this.name = name,
  this.age = age,
  this.occupation = occupation
  this.printName = ()=>{return "Full Name: ",this.name};
}

const person1 = new ConstructorFunction("John", 25, "Engineer");
// console.log(person1.printName());

class Employee{
  constructor(name, age, occupation){
    this.name = name,
    this.age = age,
    this.occupation = occupation,
    this.printName = ()=>{
      return "Full Name: ",this.name;
    }
  }
}
const person2 = new Employee("John", 25, "Engineer");
console.log(Employee.printName());


class AmazonPay{
  constructor(name, age, occupation){
    this.name = name,
    this.age = age,
    this.occupation = occupation,
    this.printName = ()=>{
      return "Full Name: ",this.name;
    }
  }
}

class Employee{
  constructor(name,department){
    this.name = name,
    this.department = department
  }
  markPresent = ()=>{
    return this.name + " is present."
  }
}

class developer extends Employee{
  submitCode = ()=>{
    return this.name + " is submitting code."
  }
}
