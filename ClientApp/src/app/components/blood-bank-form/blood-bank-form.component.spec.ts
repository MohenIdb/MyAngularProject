import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankFormComponent } from './blood-bank-form.component';

describe('BloodBankFormComponent', () => {
  let component: BloodBankFormComponent;
  let fixture: ComponentFixture<BloodBankFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodBankFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
