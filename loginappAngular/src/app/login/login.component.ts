import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../servics/auth/auth.service';
import { AuthenticationService } from '../shared/_service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSelectedEmployee: boolean = true;
  issubmited: boolean = true;
  error = '';
  constructor(private route: ActivatedRoute,
    private router: Router,
    public authenticationservice: AuthenticationService) { }

  ngOnInit(): void {
  }
  resetform(form?: NgForm) {
    if(form){
      form.reset();
    }
  }
  onSubmit(employeeForm: NgForm) {
    this.issubmited = true;
    this.authenticationservice.login(employeeForm).subscribe({
      next: data => {
        console.log(data);
    //    this.toastrService.showSuccess('Added Successfully');
      },
      error: error => {
        console.log(JSON.stringify(error));
    //  this.toastrService.showError('There was an error!',error);
      }
  });;
    if(!this.isSelectedEmployee) {
  //    this.addemployee(employeeForm); 
    } else  {
   // let id = this.employeeService.selectedEmployee?._id;
    console.log(employeeForm.value);
    /*this.employeeService.updateEmployee(id,employeeForm.value).subscribe({
      next: data => {
        console.log(data);
  //      this.toastrService.showSuccess(data);
      },
      error: error => {
        console.log(error);
  //    this.toastrService.showError('There was an error!',JSON.stringify(error));
      }
    });*/
   // this.showEmployeeList();
    }
   // this.showEmployeeList();
    }
}
