import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {
empArr:any=[]
empObj:any={}
  constructor() { }

  ngOnInit(): void {
    
  }

  submit(){
    this.empArr.push(Object.assign({}, this.empObj))
 }
}
