import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { CloseButtonComponent } from './components/close-button/close-button.component';
import { DataOtp } from './interfaces/data-otp.interface';
import { InputsComponent } from './components/inputs/inputs.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerStatus } from './interfaces/timer-otp.interface';

@Component({
  selector: 'lib-cusca-otp',
  standalone: true,
  imports: [
    CloseButtonComponent,
    CommonModule,
    InputsComponent,
    InstructionsComponent,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    TimerComponent
],
  templateUrl: './cusca-otp.component.html',
  styleUrls: ['./cusca-otp.component.scss']
})
export class CuscaOtpComponent {
  private codeOtp: string = '';
  public isValidOtp: boolean = false;
  public timerStatus: TimerStatus = 'init';

  getDataOtp(dataOtp: DataOtp): void {
    this.codeOtp = dataOtp.code;
    this.isValidOtp = dataOtp.isValid;
  }

  getDataTimer(timerStatus: TimerStatus): void {
    this.timerStatus = timerStatus;
  }
}
