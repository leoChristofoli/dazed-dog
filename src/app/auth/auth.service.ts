import { Injectable } from '@angular/core';
import { AngularFireAuthProvider, AngularFireAuthModule, AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public afa: AngularFireAuth) { }

  loginWithGoogle() {
    return this.afa.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  logout() {
    return this.afa.auth.signOut();
  }
}
