// class UserCredentials {
//     name: string;
//     password: string;
//
//     constructor(name: string, password: string) {
//         this.name = name;
//         this.password = password
//     }
// }
//
// const julio = new UserCredentials('julioteste@gmail.com', 'teste123');
// const bia = new UserCredentials('bia@gmail.com', 'teste123')
// console.log(julio)
// console.log(bia)

// class Department {
//     name: string;
//
//     constructor(n: string) {
//         this.name = n;
//     }
//
//     describe(this: Department) {
//         console.log('Department: ' + this.name)
//     }
// }
//
// const accounting = new Department('Accounting');
//
// const accountingCopy = {name: 's', describe: accounting.describe}
//
// accountingCopy.describe()
// console.log(accountingCopy.describe)

// PRIVATE AND PUBLIC ACCESS MODIFIERS

class Department {
    private employees: string[] = [];

    constructor(private readonly id: number, public name: string ) {}

    describe(this: Department) {
        console.log('Department: ' + this.name + ', Id: ' + this.id)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department(2, 'Accounting');
accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.describe();
accounting.printEmployeeInformation();
