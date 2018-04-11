import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../shared/employee.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @ViewChild('f') submitForm: NgForm;

  constructor(private employeeService: EmployeeService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.employeeService.getEmployeeData();
    this.submitForm.reset();
  }

  onSubmit() {
    console.log(this.submitForm.value);
    if (this.submitForm.value.$key === null) {
      this.employeeService.insertEmployee(this.submitForm.value);
      this.submitForm.reset();
      this.toastr.success('Employee Created successfully', 'Register Employee');
    } else {
      this.employeeService.updateEmployee(this.submitForm.value);
      this.submitForm.reset();
      this.toastr.info('Employee Updated successfully', 'Update Employee');
    }
  }

  resetForm() {
    this.submitForm.reset();
  }
}
