

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  isLoggedIn: boolean = false;

  login(){
      this.isLoggedIn = true;
      console.log('AuthService: logging in');
      
  }

  logout(){
      this.isLoggedIn = false;
      console.log('AuthService: logging out');
 
  }

  constructor() {}

 
   
  
}


