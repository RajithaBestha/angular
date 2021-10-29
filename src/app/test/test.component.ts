import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template:`<h2>Welcome Rajitha!!!</h2>
  <h2>Welcome to simplify {{name}}</h2>
  <h3>{{2+2}}</h3>
  <h1>{{"welcome to  Magical world"+" "+ name}}</h1>
  <h1>{{name.length}}</h1>
  <h1>{{name.toUpperCase()}}</h1>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  <input [id]="myId" type="text" value="Rajitha"><br><br>
  <input disabled id="{{myId}}" type="text" value="Rajitha"><br><br>
  <input [disabled]="true" id="{{myId}}" type="text" value="Lalitha"><br><br>
<input [disabled]="isDisabled" id="{{myId}}" type="text" value="vamsi"><br><br>
<input bind-disabled="isDisabled" id="{{myId}}" type="text" value="lokesh">
<br><br><br>
<h3 class="text-success">welcome to Banglore</h3>
<h3 [class]="successClass">welcome to Banglore</h3>
<h3 class="text-special" [class]="successClass" >welcome to Banglore</h3>
<h3 [class.text-danger]="hasError">welcome to Banglore</h3>
<h3 [ngClass]="messageClasses">welcome to Banglore</h3>

<h1 [style.color]="'orange'">Style Binding</h1>
<h1 [style.color]="hasError?'red':'green'">Style Binding</h1>
<h1 [style.color]="highlightColor">Style binding is posssible</h1>
 <h1 [ngStyle]="titleStyles">Style binding is posssible</h1>
<button (click)="temp='pressed greet button'">Greet</button>
{{temp}}



  `,
  styles: [`
 /* h2{
    color: green;
    text-align:center; 
  }
 h1{
    color:Orange;
    font-style:italic;
    
  }*/
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {
 public name="Rajitha"
 public siteUrl=window.location.href;
  public myId="testId";
  public isDisabled=false;
  public successClass="text-success"
  public hasError=false;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
public highlightColor="pink";
public titleStyles={
  color:"blue",
  fontStyle:"italic"
}
 temp:any='';

  constructor() { }

  ngOnInit(): void {
  }
  greetUser(){
    return "Hello"+this.name;
  }
  onClick(){
    console.log("welcome to simplify")
  
    
  }

}
