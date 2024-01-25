import { Component } from '@angular/core';
import { Nintendog } from './models/Nintendog';
import { ImaginaryFriend } from './models/ImaginaryFriend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWisdom : string = "une phrase qui inspire votre quotidien."
  n : number;
  hateList : string[] = ["une liste", "de choses", "vraiment détestable"]
  dog: Nintendog;
  friends:ImaginaryFriend[] = new Array;
  name ?: string;
  occupation?: string;
  darkMode: boolean;
  constructor(){
    this.darkMode = false;
    this.n = 7
    this.dog = new Nintendog("Bobby", "assets/img/dog.jpg")
    this.friends.push(new ImaginaryFriend("Bobby", "Ingénieur"));
    this.friends.push(new ImaginaryFriend("Sarah", "artiste ASMR"));
    this.friends.push(new ImaginaryFriend("Charles", "Ingénieur"));
  }

  addFriend(){
    if(this.name != undefined && this.occupation != undefined){
      this.friends.push(new ImaginaryFriend(this.name, this.occupation))
      this.name = "";
	    this.occupation = ""; 
    }
  }

  removeFriend(){
    this.friends.pop();
  }

  toggleMode(){
    this.darkMode = !this.darkMode
  }
}


