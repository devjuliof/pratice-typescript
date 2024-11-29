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
    protected employees: string[] = [];

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

class ITDepartment extends Department {
    constructor(id: number, public admins: string[]) {
        super(id, 'IT');
    }
}

// const it = new ITDepartment(2, ['Max']);
// it.addEmployee('Max')
// it.addEmployee('Manu')
//
// it.describe();
// it.printEmployeeInformation();

class AccountingDepartment extends Department {
    private lastReport: string;

    constructor(id: number, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    get mostRecentReport() {
        if (this.lastReport) {
            return this.reports[0]
        }
        if(!this.lastReport) {
            throw new Error('not exist')
        }
    }

    set mostRecentReport(value: string) {
        this.addReports(value)
    }

    addEmployee(name: string) {
        this.employees.push(name)
    }

    addReports(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment(1, ['report 1'])
accounting.addReports('report 1')
console.log(accounting.mostRecentReport)
console.log(accounting)