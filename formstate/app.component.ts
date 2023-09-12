import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted!');
  }
}

