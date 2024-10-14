import { Component, inject } from '@angular/core';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CuscaOtpComponent } from '../../../cusca-otp/src/public-api';

import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(CuscaOtpComponent,{
      autoFocus: false,
    });
  }
}
