import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { ToasterService } from '../shared/toaster.service';
declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService,ToasterService ]
})
export class EmployeeComponent implements OnInit {
  model: any = {};
  selectedEmployee: any;
  employeelist: Employee[];
  isSelectedEmployee: boolean = false;
  public employeeForm: FormGroup;
  constructor(public employeeService: EmployeeService,
    public toastrService: ToasterService) {
   }

  ngOnInit(): void {
    this.resetform();
    this.showEmployeeList();
  }
  resetform(form?: NgForm) {
    if(form){
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      _id: '',
      name: '',
      position: '',
      office: '',
      salary: ''
    }

  }
showEmployeeList() {
 this.employeeService.getEmployeeList().subscribe(data=> { 
   this.employeelist = data; 
  });

}
editEmployee(id: any) {
  this.employeeService.getEmployee(id).subscribe(data=> { 
    this.employeeService.selectedEmployee = data;
    this.isSelectedEmployee = true;
   });
}
deleteEmployee(id: any) {
  this.employeeService.deleteEmployee(id).subscribe(res => {
    this.toastrService.showSuccess('Record Deleted Successfully!');
  });
  this.showEmployeeList();
}
onSubmit(employeeForm: NgForm) {
  if(!this.isSelectedEmployee) {
    this.addemployee(employeeForm); 
  } else  {
  let id = this.employeeService.selectedEmployee?._id;
  console.log(employeeForm.value);
  this.employeeService.updateEmployee(id,employeeForm.value).subscribe({
    next: data => {
      console.log(data);
      this.toastrService.showSuccess(data);
    },
    error: error => {
      console.log(error);
    this.toastrService.showError('There was an error!',JSON.stringify(error));
    }
  });
  this.showEmployeeList();
  }
  this.showEmployeeList();
  }
addemployee(employeeForm: NgForm) {
    this.employeeService.addEmployee(employeeForm.value).subscribe({

      next: data => {
        console.log(data);
        this.toastrService.showSuccess('Added Successfully');
      },
      error: error => {
        console.log(error);
      this.toastrService.showError('There was an error!',JSON.stringify(error));
      }
  });

  }
  getname(name: string) {
  }
}

