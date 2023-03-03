import { Component } from '@angular/core';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  title = 'Employees de la enterprise';

  private password = 'Abc123';
  edad = 21;

  disabled = false;

  checked = true;

  getPassword () {
    return this.password;
  }

  showAlert() {
    alert("Caisteeee");
  }
}
