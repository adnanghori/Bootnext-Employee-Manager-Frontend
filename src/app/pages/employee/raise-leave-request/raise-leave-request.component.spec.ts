import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseLeaveRequestComponent } from './raise-leave-request.component';

describe('RaiseLeaveRequestComponent', () => {
  let component: RaiseLeaveRequestComponent;
  let fixture: ComponentFixture<RaiseLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseLeaveRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
