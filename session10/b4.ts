class Vehicle {
  public name: string;
  protected readonly year: number;
  private company: string;
  private readonly id: string;

  constructor(name: string, year: number, company: string, id: string) {
    this.name = name;
    this.year = year;
    this.company = company;
    this.id = id;
  }

  printInfo(): void {
    console.log("Thông tin phương tiện:");
    console.log("ID:", this.id);
    console.log("Tên phương tiện:", this.name);
    console.log("Năm sản xuất:", this.year);
    console.log("Hãng xe:", this.company);
  }
}

let vehicle1 = new Vehicle("Xe A", 2020, "Hãng A", "123456");

vehicle1.printInfo();
