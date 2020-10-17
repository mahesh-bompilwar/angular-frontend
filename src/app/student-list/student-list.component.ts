import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentServicce: StudentService) { }

  ngOnInit(): void {
    console.log("Here ngOnInit");
    this.getStudents();
  }

  private getStudents(){
    this.studentServicce.getStudentsList().subscribe(data=>{
      this.students = data;
    });
  }
}
