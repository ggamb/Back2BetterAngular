import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedLineComponent } from './red-line.component';

describe('RedLineComponent', () => {
  let component: RedLineComponent;
  let fixture: ComponentFixture<RedLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
