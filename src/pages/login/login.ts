import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { RestProvider } from '../../providers/rest/rest';

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
  public auth: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginaf(){
    this.auth.loginaf(this.user.email,this.user.password ).then((user) => { console.log(user) })
    .catch(err=>{
      let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
      });
      alert.present();
    })
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
