import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  product;

  constructor(
    public navCtrl: NavController,
    public params: NavParams
  ) {
      console.log(params.get('objeto'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  gotoproducts(){
	this.navCtrl.push('ProductsPage');
	}
}
