import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundJourneyComponent } from './sound-journey.component';

describe('SoundJourneyComponent', () => {
  let component: SoundJourneyComponent;
  let fixture: ComponentFixture<SoundJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundJourneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
