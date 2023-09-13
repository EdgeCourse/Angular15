import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-wed-alt-service-class';
constructor(private greetSvc:GreetingService) {
  this.title = this.greetSvc.sayHello()
}
}

