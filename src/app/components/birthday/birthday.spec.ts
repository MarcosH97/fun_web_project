import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Birthday } from './birthday';

describe('Birthday', () => {
  let component: Birthday;
  let fixture: ComponentFixture<Birthday>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Birthday]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Birthday);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
