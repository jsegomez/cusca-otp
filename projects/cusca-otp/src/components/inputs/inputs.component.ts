import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, input, viewChildren } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'lib-inputs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent implements AfterViewInit{
  private listInputs = viewChildren('otpInput');
  public otpCodes: string[] = ['', '', '', '', '', ''];
  private fullCode: string = '';

  ngAfterViewInit(): void {
    this.focusOnFirstInput();
  }

  focusOnFirstInput(): void {
    const inputs = this.listInputs() as ElementRef[];
    inputs[0].nativeElement.focus();
  }

  moveFocusAndCheckOtpCode(event: KeyboardEvent, index: number): void {
    const target = event.target as HTMLInputElement;

    if (target.value && index < this.otpCodes.length - 1) {
      const nextInput = target.nextElementSibling as HTMLInputElement;
      nextInput?.focus();
    } else if (event.key === 'Backspace' && index > 0) {
      const prevInput = target.previousElementSibling as HTMLInputElement;
      prevInput?.focus();
    }

    this.checkOtp();
  }

  checkOtp(): void {
    const inputs = this.listInputs() as ElementRef[];
    const values = inputs.map(input => input.nativeElement.value);
    this.fullCode = values.join('');
  }

  isOtpComplete(): void {
    if(this.fullCode.length === 6) {
      console.log('OTP completo:', this.fullCode)
    }else{
      console.log(this.fullCode)
    }
  }

  submitOtp(): void {
    // Aquí puedes manejar la lógica para enviar el OTP
    console.log('OTP enviado:', this.otpCodes.join(''));
  }

}
