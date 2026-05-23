import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfullnessStatComponent } from './mindfullness-stat.component';

describe('MindfullnessStatComponent', () => {
  let component: MindfullnessStatComponent;
  let fixture: ComponentFixture<MindfullnessStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MindfullnessStatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MindfullnessStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
