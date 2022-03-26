import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverLineComponent } from './silver-line.component';

describe('SilverLineComponent', () => {
  let component: SilverLineComponent;
  let fixture: ComponentFixture<SilverLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
