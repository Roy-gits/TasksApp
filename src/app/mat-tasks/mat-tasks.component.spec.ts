import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTasksComponent } from './mat-tasks.component';

describe('MatTasksComponent', () => {
  let component: MatTasksComponent;
  let fixture: ComponentFixture<MatTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
