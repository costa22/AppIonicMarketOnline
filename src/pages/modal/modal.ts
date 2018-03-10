import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  id: number = this.params.get('id');
  nombre: string = this.params.get('nombre');
  color: string = this.params.get('color');
  talla: string = this.params.get('talla');
  precio: number = this.params.get('precio');
  descripcion: string = this.params.get('descripcion');
  imagen: string = this.params.get('imagen');
  medidas: string = this.params.get('medidas');
  
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public viewc: ViewController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  gotoproducts(){
	this.navCtrl.push('ProductsPage');
	}

  closeModal() {
    this.viewc.dismiss();
  }
}
