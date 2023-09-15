import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  template: `
    <div>
      <h2>Reverse Text</h2>
      <input type="text" [(ngModel)]="text">
      <p>Reversed Text: {{ text | reverse }}</p>
    </div>
  `,
})
export class UserFormComponent {
  text: string = '';
}
