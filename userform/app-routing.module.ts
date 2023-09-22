import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { EmailComponent } from './email/email.component';
import { NameComponent } from './name/name.component';
import { TelephoneNumberComponent } from './telephone-number/telephone-number.component';

const routes: Routes = [
  {path: "name", component: NameComponent},
  {path: "email", component: EmailComponent},
  {path: "telephone", component: TelephoneNumberComponent},
  {path: "address", component: AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
