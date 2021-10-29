import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  name: any = "Lokesh";
  age: any = 20;
  city: any = "Hyderabad"
  empObj: any = {}
  empArr: any = []
  isEdit: boolean = false;
  temp: any ='';


  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    console.log("name-", this.name)
    console.log("age-", this.age)
    console.log("city-", this.city)
    this.empArr.push(Object.assign({}, this.empObj))
    console.log(this.empArr)
    this.empObj = {}
  }

  edit(ind: number) {
    this.empObj = JSON.parse(JSON.stringify(this.empArr[ind]))
    //this.empObj = this.empArr[ind]
    console.log(this.isEdit)
    this.isEdit = true;
    this.temp=ind;
  }
  update() 
  {
    this.empArr[this.temp] = this.empObj
    this.isEdit=false;
    this.empObj=[]
  }

 delete(ind:any) {
    this.empArr.splice(ind,1);
  }

  ontypeId(event: any) {
    //  console.log(event)
  }

}
