import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneNumberComponent } from './telephone-number.component';

describe('TelephoneNumberComponent', () => {
  let component: TelephoneNumberComponent;
  let fixture: ComponentFixture<TelephoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
