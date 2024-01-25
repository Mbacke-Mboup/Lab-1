export class Nintendog {
    age :number = 10;
  
    constructor(public name:string, public imgUrl:string){
  
    }
  
    dogInfo():string{
      return this.name + " est un Nintendog de " + this.age + " ans."
    }
  }
  