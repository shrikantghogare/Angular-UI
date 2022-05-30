import { Injectable } from '@angular/core';
import {ToastrModule, ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(public toastr: ToastrService) { }
  
  showSuccess(msg: any){
    this.toastr.success(msg, '', {
   timeOut: 3000,
 });
   }
   showError(mgs: any,error: any){
    this.toastr.error(mgs, error, {
   timeOut: 3000,
 });
   }
    showInfo(){
    this.toastr.info('everything is broken', 'Major Error', {
   timeOut: 3000,
 });
   }
    showWarning(){
    this.toastr.warning('everything is broken', 'Major Error', {
   timeOut: 3000,
 });
   }
}
