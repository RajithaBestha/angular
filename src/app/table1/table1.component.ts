import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  @Input() parentData:any={};
  @Input() empArr:any=[]

constructor() { }
empObj:any={}
  ngOnInit(): void {
  }

}
