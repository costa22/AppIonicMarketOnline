import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { SlidePage } from '../slide/slide';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  jsonGlobal: any[];
  jsonFiltrar: any[];
  cart: any[] = [];
  product: {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public rest: RestProvider,
    private storage: Storage
  ){
   this.jsonGlobal = rest.initProducts();
   this.jsonFiltrar = this.jsonGlobal;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    console.log('Carrito Inicial: ',this.cart.length);
  }

  addCart($product){
    //Obtenemos
    this.storage.get('cart').then((val) => {
      if(val != null){
        this.cart = val;
      }
    console.log('Carrito DB :',this.cart.length);
    });
    //Añadimos
    this.cart.push($product);
    //Subimos
    this.storage.set('cart',this.cart);
    console.log('Carrito Final :',this.cart.length);
  }

  getproducts(ev) {
    this.jsonFiltrar = this.jsonGlobal;
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.jsonFiltrar = this.jsonFiltrar.filter((product) => {
        return (product.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  gotoproducts(){
	this.navCtrl.push('HomePage');
	}

  gotomodal(product){
      console.log(product);
      let modal = this.modalCtrl.create(ModalPage, product);
      modal.onDidDismiss(data => {
        console.log(data);
      });
      modal.present();
  }

  gotoslide(product){
      console.log(product);
      let modal = this.modalCtrl.create(SlidePage, product);
      modal.onDidDismiss(data => {
        console.log(data);
      });
      modal.present();
  }

}
