"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("Thông tin nhân viên:");
        console.log("Tên nhân viên:", this.name);
        console.log("Công ty:", this.company);
        console.log("Số điện thoại:", this.phone);
    }
}
let employee1 = new Employee("John Doe", "ABC Company", "123-456-7890");
employee1.printInfo();
