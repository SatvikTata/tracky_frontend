import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackNetworthComponent } from './track-networth.component';

describe('TrackNetworthComponent', () => {
  let component: TrackNetworthComponent;
  let fixture: ComponentFixture<TrackNetworthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackNetworthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackNetworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
