import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelifooterComponent } from './delifooter.component';

describe('DelifooterComponent', () => {
  let component: DelifooterComponent;
  let fixture: ComponentFixture<DelifooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelifooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelifooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
