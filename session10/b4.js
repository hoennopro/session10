"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log("Thông tin phương tiện:");
        console.log("ID:", this.id);
        console.log("Tên phương tiện:", this.name);
        console.log("Năm sản xuất:", this.year);
        console.log("Hãng xe:", this.company);
    }
}
let vehicle1 = new Vehicle("Xe A", 2020, "Hãng A", "123456");
vehicle1.printInfo();
