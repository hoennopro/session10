"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
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
