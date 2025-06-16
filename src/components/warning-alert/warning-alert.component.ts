import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // standalone:true,
  template: `
         <p>This is a warning, you are in dange!</p>
        `,
  styles: [
    `
    p{
      padding: 20px;
      background-color: rgba(255, 0, 0, 0.4);;
      border: 1px, solid red;
    }
    `
  ]
})
export class WarningAlertComponent {

}
