import staffList from '../data/staff-list.json';

import { Employee } from '../types/staffTypes';

export class Staff {
  getStaff() {
    return staffList;
  }

  addEmployee(employee: Employee) {
    staffList.push(employee);
  }

  findEmployee(id: number): Employee | undefined {
    const employee = staffList.find((worker: Employee) => worker.id === id);

    if (employee) {
      return employee;
    }
  }

  editEmployee(index: number, employee: Employee) {
    staffList[index] = employee;

    return staffList[index];
  }
}
