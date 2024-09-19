import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaningTasksListComponent } from './planing-tasks-list.component';

describe('PlaningTasksListComponent', () => {
  let component: PlaningTasksListComponent;
  let fixture: ComponentFixture<PlaningTasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaningTasksListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaningTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
