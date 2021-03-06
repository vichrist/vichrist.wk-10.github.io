// TODO: Write code to define and export the Employee class

// notes for self: instantiation of new class created
// notes for self: instantiation is object oriented, i.e. object is instance of Employee class 

class Employee {
  constructor(name, id, email) {

// the key/value pairs allow us to set values by constructor arguments via extended class 
    this.name = name; 
    this.id = id;  
    this.email = email; 
  }

////////////// Employee Class Methods //////////////
  getName() { 
    return employee.name; 
  }

  getId() {
    return employee.id; 
  }

  getEmail () {
    return employee.email; 
  }

  getRole () {
    return 'Employee'; 
  }

////////////// Method to Print Stats  //////////////
  printInfo() {
      console.log(`Employee Test: Name: ${this.name}`);
      console.log(`Employee Test: ID: ${this.id}`);
      console.log(`Employee Test: Email: ${this.email}`);
      employee.getName(); 
      employee.getId(); 
      employee.getEmail(); 
      employee.getRole(); 
    }
  }

////////////// Parameter Values Used for Testing //////////////
  const employee = new Employee('Alice', 100, 'test@test.com')
  employee.printInfo(); 


////////////// Export Employee Class Object //////////////

module.exports = Employee;