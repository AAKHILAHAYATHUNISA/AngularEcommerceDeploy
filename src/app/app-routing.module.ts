import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { canAcivate } from './auth.gaurd';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { SingleComponentComponent } from './home/single-component/single-component.component';
import { HttpCrudComponent } from './http-crud/http-crud.component';
import { HttpComponent } from './http/http.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDispalayComponent } from './product-dispalay/product-dispalay.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RouteFormComponent } from './route-form/route-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path: '', component: HttpComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Home/:api_id', component: SingleComponentComponent},
  {path: 'Books', component: BooksComponent},
  {path: 'RouteForm', component: RouteFormComponent },
  // {path: 'Products', component: ProductsComponent, children : 
  //   [
  //     {path: 'Products/display_id', component: ProductDispalayComponent}
  //   ]
  // },
  // {path: 'Products', component: ProductsComponent , canActivate: [Guard]},
  // {path: 'Products/:display_id', component: ProductDispalayComponent, canActivate: [Guard]},
  {path: 'Products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'Products/:display_id', component: ProductDispalayComponent},
  {path: 'ReactiveForm', component: ReactiveFormComponent},
  // need to add candeactivate etc
  {path: 'TemplateForm', component: TemplateFormComponent},
  {path: 'Login', component: ReactiveFormComponent},
  {path: 'Logout', component: ProductsComponent},
  {path : 'Crud', component: HttpComponent},
  {path : 'http', component: HttpCrudComponent},
  {path: '**', component: NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
