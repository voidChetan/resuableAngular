import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTableComponent } from './widgets/my-table/my-table.component'; 
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './pages/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    UsersComponent
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
