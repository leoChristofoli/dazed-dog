import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemFormComponent } from './items/item-form/item-form.component';
import { AuthService } from './auth/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginPageComponent } from './login-page/login-page.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBzn99u-owJiHhCyh-rsIrZTLT4s-kYuAU",
    authDomain: "dazed-dog.firebaseapp.com",
    databaseURL: "https://dazed-dog.firebaseio.com",
    projectId: "dazed-dog",
    storageBucket: "dazed-dog.appspot.com",
    messagingSenderId: "205853149405"
};

const routes: Routes = [
  {
    path: '',
    component: ItemsListComponent
  },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailComponent,
    ItemFormComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, 'dazed-dog'),
    AngularFireDatabaseModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
