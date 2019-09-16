import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.auth.useDeviceLanguage();
  }

  public signIn(email: string): Promise<any> {
    const actionCodeSettings = {
      url: `http://localhost:8100/welcome`,
      handleCodeInApp: true
    };
    return this.afAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings);
  }

  public confirmSignIn(email: string, url: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailLink(email, url);
  }

  public signOut() {
    return this.afAuth.auth.signOut();
  }

  public getAuthStateObserver(): Observable<any> {
    return this.afAuth.authState;
  }

}

