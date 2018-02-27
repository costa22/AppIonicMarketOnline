import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

	user = {} as User;

  constructor( private afAuth: AngularFireAuth,
  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user : User){
	try{
		const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
		if(result){
			this.navCtrl.setRoot('HomePage');
		}
	}

	catch(e){
		console.log(e);
	}
  }

  login(user: User){
    console.log("Usuario "+user.email," Password "+user.password);
    try{
      if(user){
        //Todo correcto
        if(user.email && user.password == "admin"){
          this.navCtrl.push('HomePage');
        }else{
          console.log("Validación Incorrecta");
        }
      }
    }catch(e){
      console.log(e);
    }
  }

}
