class Department {
  public readonly id: number;
  private name: string;
  private employees: string[];

  constructor(id: number, name: string, employees: string[]) {
    this.id = id;
    this.name = name;
    this.employees = employees;
  }

  describe(): void {
    console.log("ID của phòng ban:", this.id);
    console.log("Tên phòng ban:", this.name);
  }
}

let department1 = new Department(1, "Phòng kế toán", [
  "John Doe",
  "Alice Smith",
  "Bob Johnson",
]);

department1.describe();
