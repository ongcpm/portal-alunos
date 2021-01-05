import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelViewDialogComponent } from './level-view-dialog.component';

describe('LevelViewDialogComponent', () => {
  let component: LevelViewDialogComponent;
  let fixture: ComponentFixture<LevelViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelViewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
