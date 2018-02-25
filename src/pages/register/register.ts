import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	user = {} as User;
 
  constructor( private afAuth: AngularFireAuth,
  public navCtrl: NavController, public navParams: NavParams) {
  }
	
	async register(user : User) {
		try{
			const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
			if(result){
				this.navCtrl.setRoot('HomePage');
			}
		}
		catch(e){
			console.log(e);
		}
		
	}
}

