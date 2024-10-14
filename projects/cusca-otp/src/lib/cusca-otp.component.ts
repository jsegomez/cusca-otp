import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CloseButtonComponent } from "../components/close-button/close-button.component";
import { InputsComponent } from "../components/inputs/inputs.component";
import { InstructionsComponent } from "../components/instructions/instructions.component";
import { TimerComponent } from "../components/timer/timer.component";

@Component({
  selector: 'lib-cusca-otp',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    CloseButtonComponent,
    InputsComponent,
    InstructionsComponent,
    TimerComponent
],
  templateUrl: './cusca-otp.component.html',
  styleUrls: ['./cusca-otp.component.scss']
})
export class CuscaOtpComponent {
  private formBuilder = inject(FormBuilder);

  timer: string = '0:24';


  resendCode(): void {
    // Aquí puedes manejar la lógica para reenviar el código OTP
    console.log('Código reenviado');
  }

  close(): void {
    // Lógica para cerrar el modal o componente
    console.log('Cerrando el componente OTP');
  }

  goBack(): void {
    // Lógica para regresar a la pantalla anterior
    console.log('Regresando a la pantalla anterior');
  }
}
