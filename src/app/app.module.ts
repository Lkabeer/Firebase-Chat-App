import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyADB91lDP2Hv4xeMjq9aJ_-92fg88w7BOc",
  authDomain: "angularfirebasechatapp.firebaseapp.com",
  databaseURL: "https://angularfirebasechatapp.firebaseio.com",
  projectId: "angularfirebasechatapp",
  storageBucket: "angularfirebasechatapp.appspot.com",
  messagingSenderId: "123136448958"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
