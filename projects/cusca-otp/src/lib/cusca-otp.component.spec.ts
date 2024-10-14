import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuscaOtpComponent } from './cusca-otp.component';

describe('CuscaOtpComponent', () => {
  let component: CuscaOtpComponent;
  let fixture: ComponentFixture<CuscaOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuscaOtpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuscaOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
