import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, output, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataOtp } from '../../interfaces/data-otp.interface';

@Component({
  selector: 'lib-inputs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent implements AfterViewInit{
  private fullCode: string = '';
  private listInputs = viewChildren('otpInput');

  public sendDataOtpToParentComponent = output<DataOtp>();
  public otpCodes: string[] = ['', '', '', '', '', ''];

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
    this.sendDataOtp();
  }

  sendDataOtp(): void {
    const isValid = this.fullCode.length === 6;
    if(this.fullCode.length === 6) this.sendDataOtpToParentComponent.emit({isValid, code: this.fullCode});
    else this.sendDataOtpToParentComponent.emit({isValid, code: this.fullCode});
  }
}
