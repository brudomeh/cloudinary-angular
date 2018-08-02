import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { routes } from './routes';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session';
import { HttpModule } from '@angular/http';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneAddComponent } from './phone-add/phone-add.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';
import { PhoneService } from '../services/phone.service';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PhoneDetailsComponent,
    PhoneAddComponent,
    PhoneListComponent,
    PhoneEditComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [SessionService, PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
