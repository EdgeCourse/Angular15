import { Component, OnInit} from '@angular/core';

//import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
/*
  template: `
		I say {{greeting}}
`,
*/
  styleUrls: ['./hello.component.css']
})


export class HelloComponent  {
/*
greeting = "Please click the button below"
showGreeting() {
this.greeting = "Hello there!"
}
*/
/*
firstName = "Daffy"
lastName = "Duck"
fullName() : string {
return this.firstName + " " + this.lastName
}
*/

/*
imageURL = "https://news.yale.edu/sites/default/files/styles/horizontal_image/public/d6_files/YaleNews_hopper-grace.UNIVAC.102635875-CC_0.jpg?itok=4HL3ETlO"
website = "https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-legacy-innovation-and-service"
policyAccepted = false
*/


/*
//we want to sanitize this
description = `<em>Grace Hopper</em> 
<script>alert()</script>
`
*/

/*
xCoord = 0
yCoord = 0
showCoordinates(e:MouseEvent) {
this.xCoord = e.clientX
this.yCoord = e.clientY
}
*/

//policyAccepted = true

//policyShown = false

//color = 'Gold'

//acceptPolicy = false

/*
pets = [
{id: 100, name: "Fiffy", type: "Cat", age: 2},
{id: 123, name: "Fido", type: "Dog", age: 1},
{id: 561, name: "Mimi", type: "Turtle", age: 2}]
*/

/*
deletePet(petToDelete) {
this.pets = this.pets.filter(
p => p.id !== petToDelete.id)
}
*/


/*
trackByPetId(index:number, pet:any) : number {
return pet.id
}
*/


selectedPage = 1
next() {this.selectedPage += 1}



//handleClick(userId:HTMLInputElement) {
//console.log("You entered:", userId.value)
//}



constructor() { }
ngOnInit(): void {}

}



/*
export class HelloComponent implements OnInit, OnDestroy {
greeting = "Please click the button below"
showGreeting() {
this.greeting = "Hello there!"
}	
constructor() { }
ngOnInit(): void {
	console.log("initialize")
}
ngOnDestroy(): void {
	console.log("destroy")
}

}
*/



