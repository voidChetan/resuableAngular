import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './widgets/my-table/my-table.component'; 
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './pages/users/users.component';
import { AutoTextLengthDirective } from './directives/textarea/auto-text-length.directive';
import { AccordionComponent } from './widgets/accordion/accordion.component';
import { EmployeeComponent } from './pages/employee/employee.component';
@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    UsersComponent,
    AutoTextLengthDirective,
    AccordionComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
