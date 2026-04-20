/**
 * Q1. Create a class 'Person'
 * --> name, age, email (variables)
 * --> getPersonInfo(), introduce() (methods)
 * 
 * Create a child class Employee that inherit Person class
 * --> employeeId, department, #salary (variables)
 * --> setSalary(), getSalary(), work(), getEmployeeInfo() --> print parent statement exactly and add ID and Department also with that.
 * --> introduce() --> print parent statement exactly and add Department also.
 */

class Person {
    name;
    age;
    email;
    constructor(email, name, age) {
        this.email = email,
            this.age = age,
            this.name = name;
    }
    getPersonInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
    introduce() {
        return `Hello, my name is ${this.name}. I'm ${this.age} years old`;
    }
}

class Employee extends Person {
    employeeId;
    department;
    #salary;

    constructor(name, email, age, employeeId, department, salary) {
        super(email, name, age);
        this.#salary = salary;
        this.department = department;
        this.employeeId = employeeId;
    }

    setSalary(salary) {
        this.#salary = salary;
    }
    getSalary() {
        return this.#salary;
    }
    work() {
        return 'The employee is working 🧑‍💼'
    }
    getEmployeeInfo() {
        return `${super.getPersonInfo()}, ID: ${this.employeeId}, Department: ${this.department}`
    }
    introduce() {
        return `${super.introduce()}, I work in the ${this.department} department`
    }
}

// const emp = new Employee('Mogambo', 'mogambo@gmail.com', 75, 'HR123', 'HR', 50000);
// console.log(emp.getEmployeeInfo());
// console.log(emp.introduce());
// console.log(emp.work());


class Manager extends Employee {

    constructor(name, email, age, employeeId, department, salary, teamSize) {
        super(name, email, age, employeeId, department, salary);
        this.teamSize = teamSize;
        this.#managedEmployees = [];
    }
    #managedEmployees;

    addEmployee(employee) {
        if (employee instanceof Employee) {
            this.#managedEmployees.push(employee);
            return `${employee.name} added to the team`
        }
    }
    getEmployee() {
        return this.#managedEmployees.map(emp => emp.name);
    }
    work() {
        return `The manager is managing a team of ${this.teamSize} employees. 👩‍💼`
    }
    introduce() {
        return `${super.introduce()}, I manage a team of ${this.teamSize} employees.`
    }
}

/**
 * Create a Develper class that inherits Manager Class.
 * programmingLanguage, #projectCompleted --> variable
 * writeCode(), completeProject(), getProjectCount(), work(), introduce() --> methods
 */

class Develper extends Manager {

    constructor(programmingLanguage, projectCompleted, name, email, age, employeeId, department, salary, teamSize) {
        super(name, email, age, employeeId, department, salary, teamSize);
        this.programmingLanguage = programmingLanguage;
        this.#projectCompleted = projectCompleted;
    }
    #projectCompleted;

    writeCode() {
        return `The developer is writing code in ${this.programmingLanguage}. 💻`
    }
    completeProject(project) {
        this.#projectCompleted++;
        return `The developer has completed ${project}.`;
    }
    getProjectCount() {
        return this.#projectCompleted;
    }
    work() {
        return `The developer is coding! 💻`;
    }
    introduce() {
        return `${super.introduce()} I specialize in ${this.programmingLanguage} development.`;
    }     
}

// memory referencing 
const manager = new Manager('Joshua', 'joshua@example.com', 40, 'EMPOO2', 'Engineering', 60000, 5);

const developer = new Develper('Rajkumar', 82, 'rajkumar@gmail.com', 'EMPOO1', 'Engineering', 'JavaScript');
console.log(developer.setSalary(1200000));