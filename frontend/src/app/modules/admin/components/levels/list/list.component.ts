import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LevelViewDialogComponent } from 'src/app/modules/shared/components/dialogs/level-view-dialog/level-view-dialog.component';
import { LevelService } from 'src/app/services/level/level.service';
import { Level } from '../../../../../models/level';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public levels;

  constructor(
    private levelService: LevelService, 
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  } 

  getAll() {
    this.levelService.getAll().subscribe((levels: Level) => {
      this.levels = levels;
      console.log(this.levels);
    });
  }

  editLevel(level: Level): void {
    window.localStorage.removeItem("editLevelId");
    window.localStorage.setItem("editLevelId", level._id.toString());
    console.log('LOCALSTORAGE', localStorage);
    console.log('LEVEL', level);
    this.router.navigate(['levels/edit/' + localStorage.getItem('editLevelId')]);
  };

  delete(levelId) {
    console.log(levelId);
    this.levelService.deleteLevel(levelId).subscribe(res => {
      console.log(res);
      this.getAll();
    })
  }

  viewLevel(level) {
    const dialogRef = this.dialog.open(LevelViewDialogComponent, {
      width: '600px',
      height: '300px',
      data: {
        level: level
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



   

}
