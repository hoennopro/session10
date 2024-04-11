class Student {
  id: number;
  age: number;
  email: string;

  constructor(id: number, age: number, email: string) {
    this.id = id;
    this.age = age;
    this.email = email;
  }
}

let students: Student[] = [];

let student1 = new Student(1, 20, "student1@example.com");
let student2 = new Student(2, 22, "student2@example.com");
let student3 = new Student(3, 21, "student3@example.com");

students.push(student1, student2, student3);

console.log("Danh sách sinh viên:");
students.forEach((student, index) => {
  console.log(`Sinh viên ${index + 1}:`);
  console.log("ID:", student.id);
  console.log("Tuổi:", student.age);
  console.log("Email:", student.email);
});
