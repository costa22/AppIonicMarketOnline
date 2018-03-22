import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  products: any[];

  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public alertCtrl: AlertController,
    public rest: RestProvider,
    private storage: Storage
  ){
    this.products= [];
    this.loadData();
  }
  delete($product){
    //Obtenemos
    this.storage.get('cart').then((val) => {
      if(val != null){
        this.products = val;
      }
    console.log('Carrito DB :',this.products.length);
    });
    //Borramos

    //Subimos
    this.storage.set('cart',this.products);
    console.log('Carrito Final :',this.products.length);
    this.loadData();
  }

  deleteall(){
    this.storage.remove('cart');
    this.loadData();
  }

  loadData(){
    this.storage.get('cart').then((val) => {
      if(val != null){
        this.products = val;

      }else{
        this.products= [];
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sin stock',
      message: 'Mensaje de prueba',
      buttons: ['Ok']
    });
    alert.present();
	}

  getTotal(){
    var total = 0;
    for(var i = 0; i < this.products.length; i++){
        var product = this.products[i];
        total += (product.precio);
    }
    return total;
  }

  getCount(){
    return this.products.length;
  }

}
