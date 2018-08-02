import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneAddComponent } from './phone-add/phone-add.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';


export const routes: Routes = [
  { path: '', component: PhoneListComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'phone/:id', component: PhoneDetailsComponent },
  { path: 'phone/edit/:id', component: PhoneEditComponent },
  { path: 'add', component: PhoneAddComponent },
  { path: '**', redirectTo: '' }
];
