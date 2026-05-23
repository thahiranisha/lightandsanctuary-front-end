import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantuaryMapComponent } from './santuary-map.component';

describe('SantuaryMapComponent', () => {
  let component: SantuaryMapComponent;
  let fixture: ComponentFixture<SantuaryMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SantuaryMapComponent]
    });
    fixture = TestBed.createComponent(SantuaryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
