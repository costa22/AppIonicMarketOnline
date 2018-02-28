import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(
    public navCtrl: NavController,
    public params: NavParams
  ) {
      console.log('UserId', params.get('token'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  gotoproducts(){
	this.navCtrl.push('ProductsPage');
	}
}
