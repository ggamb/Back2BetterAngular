import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowLineComponent } from './yellow-line.component';

describe('YellowLineComponent', () => {
  let component: YellowLineComponent;
  let fixture: ComponentFixture<YellowLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
