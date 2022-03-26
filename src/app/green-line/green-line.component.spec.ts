import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenLineComponent } from './green-line.component';

describe('GreenLineComponent', () => {
  let component: GreenLineComponent;
  let fixture: ComponentFixture<GreenLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
