import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListenersComponent } from './top-listeners.component';

describe('TopListenersComponent', () => {
  let component: TopListenersComponent;
  let fixture: ComponentFixture<TopListenersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopListenersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopListenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
