import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewComponent } from 'src/app/modules/shared/components/dialogs/view/view.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public students = [];
  public student;
  public userenter;

  constructor(private studentsService: StudentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.studentsService.getAll().subscribe((students: any[]) => {
      this.students = students;
      console.log(this.students);
    });
  }

  viewStudent(student) {
    const dialogRef = this.dialog.open(ViewComponent, {
      width: '600px',
      height: '600px',
      data: {
        student: student
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
