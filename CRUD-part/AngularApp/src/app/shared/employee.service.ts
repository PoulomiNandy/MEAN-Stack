import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';



// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';


// import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';


import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  public selectedEmployee: Employee;
  public employees: Employee[];
  readonly baseURL = 'http://localhost:3000/pangolins';

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}



