interface PersonalInfo {
  firstName: string;
  lastName: string;
  age: number;
}

interface WorkInfo {
  employeeId: string;
  department: string;
  position: string;
}

type EmployeeDetails = PersonalInfo & WorkInfo;

const Employee: EmployeeDetails = {
  firstName: "Ashish",
  lastName: "Jadhav",
  age: 27,
  employeeId: "A5154",
  department: "Engineering",
  position: "Software Engineer",
};

console.log(Employee);
