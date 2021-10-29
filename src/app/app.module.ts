import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project1Component } from './project1/project1.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { List1Component } from './list1/list1.component';
import { Table1Component } from './table1/table1.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    ListComponent,
    TableComponent,
    TestComponent,
    List1Component,
    Table1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
