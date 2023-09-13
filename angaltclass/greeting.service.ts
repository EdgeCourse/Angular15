import { Injectable } from '@angular/core';


 
export abstract class GreetingService {
    abstract sayHello() : string
}
 
@Injectable()
export class HelloGreetingService extends GreetingService {
    sayHello() : string {
        return "Hello World"
    }
}
 
@Injectable()
export class GoodbyeGreetingService extends GreetingService {
    sayHello() : string {
        return "Goodbye"
    }
}