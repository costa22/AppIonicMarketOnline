import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  product: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(product, params.get(product));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  gotoproducts(){
	this.navCtrl.push('ProductsPage');
	}
}
