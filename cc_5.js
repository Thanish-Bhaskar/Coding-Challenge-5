//U08201790
// Thanish Bhaskar
// CREATING CLASS
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Employee Name: ${this.name}, Monthly Salary: ${this.salary}`);
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
// EXTENDING EMPLOYEE CLASS TO INCLUDE MANAGER CLASS
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
// FUNCTION TO CALCULATE BONUS
    calculateAnnualSalary() {
        const baseAnnualSalary = super.calculateAnnualSalary();
        const bonus = baseAnnualSalary * 0.15;// CALCULATING PERCENT AMOUNT
        console.log(`Bonus: ${bonus}`);
        return baseAnnualSalary + bonus;
    }
}

const manager1 = new Manager('Bob Ross', 6600, 'Digital Marketing');
console.log(`Total Annual Salary for ${manager1.name}: ${manager1.calculateAnnualSalary()}`);

const manager2 = new Manager('Debbie Little', 7205, 'Finance');
console.log(`Total Annual Salary for ${manager2.name}: ${manager2.calculateAnnualSalary()}`);
