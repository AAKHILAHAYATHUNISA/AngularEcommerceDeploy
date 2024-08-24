import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SingleComponentComponent } from './home/single-component/single-component.component';
import { HttpTableComponent } from './http-table/http-table.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDispalayComponent } from './product-dispalay/product-dispalay.component';
import { CardComponent } from './products/card/card.component';
import { CardgroupComponent } from './products/cardgroup/cardgroup.component';
import { NavbuttonComponent } from './products/navbutton/navbutton.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { BooksComponent } from './books/books.component';
import { BooksDisplayComponent } from './books/books-display/books-display.component';
import { RouteFormComponent } from './route-form/route-form.component';
import { HttpComponent } from './http/http.component';
import { HttpCrudComponent } from './http-crud/http-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReactiveFormComponent,
    ProductsComponent,
    CardComponent,
    HomeComponent,
    TemplateFormComponent,
    LoginComponent,
    NotFoundComponent,
    CardgroupComponent,
    ProductDispalayComponent,
    NavbuttonComponent,
    HttpTableComponent,
    SingleComponentComponent,
    BooksComponent,
    BooksDisplayComponent,
    RouteFormComponent,
    HttpComponent,
    HttpCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
