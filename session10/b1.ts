class Vehicle {
  name: string;
  year: number;
  company: string;

  constructor(name: string, year: number, company: string) {
    this.name = name;
    this.year = year;
    this.company = company;
  }
}

let vehicle1 = new Vehicle("Xe A", 2020, "Hãng A");
let vehicle2 = new Vehicle("Xe B", 2018, "Hãng B");

console.log("Thông tin của vehicle1:");
console.log("Tên phương tiện:", vehicle1.name);
console.log("Năm sản xuất:", vehicle1.year);
console.log("Hãng xe:", vehicle1.company);

console.log("Thông tin của vehicle2:");
console.log("Tên phương tiện:", vehicle2.name);
console.log("Năm sản xuất:", vehicle2.year);
console.log("Hãng xe:", vehicle2.company);
