class Employee {
  public name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  printInfo(): void {
    console.log("Thông tin nhân viên:");
    console.log("Tên nhân viên:", this.name);
    console.log("Công ty:", this.company);
    console.log("Số điện thoại:", this.phone);
  }
}

let employee1 = new Employee("John Doe", "ABC Company", "123-456-7890");

employee1.printInfo();
