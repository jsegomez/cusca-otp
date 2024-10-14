import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'lib-close-button',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './close-button.component.html',
  styleUrl: './close-button.component.css'
})
export class CloseButtonComponent {

}
