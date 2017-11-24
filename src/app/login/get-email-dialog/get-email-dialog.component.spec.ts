import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmailDialogComponent } from './get-email-dialog.component';

describe('GetEmailDialogComponent', () => {
  let component: GetEmailDialogComponent;
  let fixture: ComponentFixture<GetEmailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
