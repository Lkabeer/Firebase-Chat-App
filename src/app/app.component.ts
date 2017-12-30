import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, AngularFireDatabaseModule  } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  items: FirebaseListObservable<any[]>
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {
    this.items = afDatabase.list('/messages', {
      query: {
        limitToLast: 5
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  chatSend(msg: string) {
    this.items.push({
      message: msg
    });
    this.msgVal = '';
  }
}
