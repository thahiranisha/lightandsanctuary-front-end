import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyAffirmationComponent } from './daily-affirmation.component';

describe('DailyAffirmationComponent', () => {
  let component: DailyAffirmationComponent;
  let fixture: ComponentFixture<DailyAffirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyAffirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyAffirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
