import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: any;
  employee: Employee[];
  readonly baseurl = 'http://localhost:3000/users';
  public headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.append('Access-Control-Allow-Origin','*');
   }
   getEmployeeList() {
     return this.http.get<any>(this.baseurl);
   }
   addEmployee(emp: Employee) {
    return this.http.post(this.baseurl+'/add/',emp,{headers:this.headers});
   }
   getEmployee(id: any) {
    return this.http.get(this.baseurl+'/single/'+id);
   }
   updateEmployee(id:any,emp: any) {
    return this.http.put<any>(this.baseurl+'/update/'+id,emp,{headers:this.headers});
   }
   deleteEmployee(id: any) {
    return this.http.delete(this.baseurl+'/remove/'+id);
   }
}
