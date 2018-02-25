import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public alertCtrl: AlertController,
  app: App, menu: MenuController,
  public navCtrl: NavController,
  public navParams: NavParams)
  {
	menu.enable(true);
  }

	gotolist(){
	this.navCtrl.push('ListsPage');
	}
	gotocart(){
	this.navCtrl.push('CartPage');
	}
	gotoothers(){
	this.navCtrl.push('OthersPage');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensaje',
      message: 'Mensaje de prueba',
      buttons: ['Ok']
    });
    alert.present();
	}

}
