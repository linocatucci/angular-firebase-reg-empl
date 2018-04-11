import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../shared/employee.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];

  constructor(private employeeService: EmployeeService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    const xEmployees = this.employeeService.getEmployeeData();
    xEmployees.snapshotChanges()
      .subscribe(
        (data) => {
          this.employeeList = [];
          data.forEach(element => {
            const convertingList = element.payload.toJSON();
            convertingList['$key'] = element.key;
            this.employeeList.push(convertingList as Employee);
          });
        }
      );
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(emp: Employee) {
    this.employeeService.deleteEmployee(emp.$key);
    this.toastr.warning('Employee Deleted successfully', 'Delete Employee');
  }
}
