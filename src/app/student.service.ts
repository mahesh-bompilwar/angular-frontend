import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';
 
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL="http://localhost:8080/api/v1/"
  constructor(private httpclient: HttpClient) { }

  getStudentsList(): Observable<Student[]>{
    console.log("Here getStudentsList Observable");
    return this.httpclient.get<Student[]>(`${this.baseURL+'getStudents'}`);     
  }

  
  addStudent(student: Student): Observable<any>{
    console.log("Here addStudent Observable");
    return this.httpclient.post(`${this.baseURL+'addStudent'}`, student);     
  }
}
