import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyListenersComponent } from './monthly-listeners.component';

describe('MonthlyListenersComponent', () => {
  let component: MonthlyListenersComponent;
  let fixture: ComponentFixture<MonthlyListenersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyListenersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyListenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
