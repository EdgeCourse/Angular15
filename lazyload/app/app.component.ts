import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-storage-app';
  constructor( private localStorageService: LocalStorageService) {}
  public firstname: string = '';
  public lastname: string = '';
  public age: number = 21;
  public queryKey!: string;
  public removeKey!: string;
  public queryResult!: string;
  public person = {firstName: this.firstname, lastName: this.lastname, age: this.age }
public addPerson(){
  this.person.firstName = this.firstname
  this.person.age = this.age;
  this.person.lastName = this.lastname;
  this.localStorageService.setItem(this.firstname,  JSON.stringify(this.person))
}
 public getPerson(nameToRemove:string){
  this.queryResult = this.localStorageService.getItem(nameToRemove) || "";
}
public deletePerson(nameToDelete:string){
   this.localStorageService.removeItem(nameToDelete);
}
public reset(){
   this.localStorageService.clear();
}
}