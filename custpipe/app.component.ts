import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public search: any = '';
  public query: string = "";
  constructor(){}

  students = [{
      "id": 1,
      "name": "Bob Loblaw",
      "email": "bob.loblaw@gmail.com"
    },
    {
      "id": 2,
      "name": "Angela Adams",
      "email": "angela.adams@gmail.com"
    },
    {
      "id": 3,
      "name": "John Stevens",
      "email": "john.stevens@hotmail.com"
    },
    {
      "id": 4,
      "name": "Allison Smith",
      "email": "allison.smith@gmail.com"
    },
    {
      "id": 5,
      "name": "Jim Lance",
      "email": "jim.lance@hotmail.com"
    },
    {
      "id": 6,
      "name": "Angela Matthews",
      "email": "angela.matthews@hotmail.com"
    },
    {
      "id": 7,
      "name": "Nate Sutton",
      "email": "nate.sutton@gmail.com"
    },
    {
      "id": 8,
      "name": "Danny Ortega",
      "email": "danny.ortega@hotmail.com"
    },
    {
      "id": 9,
      "name": "Henry Mccoy",
      "email": "henry.mccoy@gmail.com"
    },
    {
      "id": 10,
      "name": "Arthur Wallace",
      "email": "arthur.wallace@gmail.com"
    }
  ]

}