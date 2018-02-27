import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class RestProvider {

  randomUrl = 'https://randomuser.me/api/?results=25';

    page: string;
  constructor(
    public http: HttpClient,
    private afAuth: AngularFireAuth) {
    console.log('RestProvider Cargado');
  }
    getUsersRandom() {
      return this.http.get(this.randomUrl);
    }

  loginUser(email:string, password:string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(user=>Promise.resolve(user))
        .catch(err=>Promise.reject(err))
    }
    catch(e){
      console.log(e);
    }
}
