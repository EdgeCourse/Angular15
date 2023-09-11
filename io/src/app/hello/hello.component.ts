import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent {
	
//@Input() 
//greeting = "" 

/*
@Input("greeting-text") 
greeting = ""
*/

//@Input()
//user = {name: "", email: ""}

//isValid = false //Internal variable not decorated


/*
@Output("on-registration") emitter = new EventEmitter()

registerUser(email:string) {
this.emitter.emit(email)
}
*/


@Input() age = 0
@Output() ageChange = new EventEmitter()

enterAge(age:string) { this.ageChange.emit(parseInt(age))
}



}
