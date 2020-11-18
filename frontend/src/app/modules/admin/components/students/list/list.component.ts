import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public students = [];
  public student;
  public errorMessage: string;
  public closeResult: string;
  public searchText;
  public userenter;
  
  constructor(private studentsService: StudentService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() { 
    this.studentsService.getAll().subscribe((students: any[]) => {
      this.students = students;
      console.log(this.students);
    });
  } 

} 
