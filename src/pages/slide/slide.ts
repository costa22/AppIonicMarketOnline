import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  id: number = this.params.get('id');
  nombre: string = this.params.get('nombre');
  imagen: string = this.params.get('imagen');
  imagen1: string = this.params.get('imagen1');
  imagen2: string = this.params.get('imagen2');
  imagen3: string = this.params.get('imagen3');

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public viewc: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }

  gotoproducts(){
	this.navCtrl.push('ProductsPage');
	}

  closeModal() {
    this.viewc.dismiss();
  }
}
