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
    this.employeeService.insertEmployee(this.submitForm.value);
    this.submitForm.reset();
    this.toastr.success()

  }

  resetForm() {
    this.submitForm.reset();
  }
}
