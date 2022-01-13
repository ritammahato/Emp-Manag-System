import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseURL = 'http://localhost:4090';

  constructor( private httpClient: HttpClient ) { }

  addEmployee(employee: Employee) {
    console.log(employee);
    return this.httpClient.post(`${this.baseURL}/add-employee`,employee);
  }
  getAllEmployee(){
    return this.httpClient.get(`${this.baseURL}/employee`);
  }

  getSingleEmp(id:any){
    return this.httpClient.get(`${this.baseURL}/employee/${id}`);

  }
  editEmployee(id:any,data:any){
    return this.httpClient.put(`${this.baseURL}/edit-emp/${id}`,data);
  }
  deleteEmployee(id:any){
    return this.httpClient.delete(`${this.baseURL}/delete-emp/${id}`);
  }

}
