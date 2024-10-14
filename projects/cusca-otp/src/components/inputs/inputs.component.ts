import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-inputs',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  public otpCodes: string[] = ['', '', '', '', '', ''];

  moveFocus(event: KeyboardEvent, index: number): void {
    const target = event.target as HTMLInputElement;
    if (target.value && index < this.otpCodes.length - 1) {
      const nextInput = target.nextElementSibling as HTMLInputElement;
      nextInput?.focus();
    } else if (event.key === 'Backspace' && index > 0) {
      const prevInput = target.previousElementSibling as HTMLInputElement;
      prevInput?.focus();
    }
  }

  isOtpComplete(): boolean {
    return this.otpCodes.every(code => code !== '');
  }

  submitOtp(): void {
    // Aquí puedes manejar la lógica para enviar el OTP
    console.log('OTP enviado:', this.otpCodes.join(''));
  }

}
