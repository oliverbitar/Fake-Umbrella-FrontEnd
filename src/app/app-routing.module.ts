import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDatabaseComponent } from './customer-database/customer-database.component';
import { NextRainComponent } from './next-rain/next-rain.component';
import { TopFourComponent } from './top-four/top-four.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
  {path: 'customerdb', component: CustomerDatabaseComponent},
  {path: 'nextrain', component: NextRainComponent},
  {path: 'topfour', component: TopFourComponent},
  {path: 'add', component: AddCustomerComponent},
  {path: 'edit', component: EditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
