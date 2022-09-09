import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminqrscannerComponent } from './adminqrscanner.component';

describe('AdminqrscannerComponent', () => {
  let component: AdminqrscannerComponent;
  let fixture: ComponentFixture<AdminqrscannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminqrscannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminqrscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
