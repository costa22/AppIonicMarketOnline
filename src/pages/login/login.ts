import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
	user = {} as User;

  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public auth: RestProvider,
  private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('Vista LoginPage');
  }

  guess(){
    this.storage.set('email', this.user.email);
    this.navCtrl.setRoot('HomePage');
  }

  loginaf(){
    this.auth.loginFB(this.user.email,this.user.password ).then((user) => { console.log(user) })
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
