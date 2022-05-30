import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_Model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  readonly baseurl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  login(form: NgForm) {
    console.log(form);
    return this.http.post<any>(this.baseurl+`/authenticate`,form);
}
}
