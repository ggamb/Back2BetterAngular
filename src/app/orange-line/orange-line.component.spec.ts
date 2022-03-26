import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangeLineComponent } from './orange-line.component';

describe('OrangeLineComponent', () => {
  let component: OrangeLineComponent;
  let fixture: ComponentFixture<OrangeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrangeLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
