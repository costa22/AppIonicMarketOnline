import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  products: any[];
  users: any[] = [];
  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider,
    public alertCtrl: AlertController,
    public rest: RestProvider
  ) {
    this.getUsersRandom();
    this.products = rest.initProducts();
  }

  getUsersRandom(){
    this.restProvider.getUsersRandom()
    .subscribe(
      (data) => {
        this.users = data['results'];
        console.log(this.users)
      },
      (error) =>{ console.error(error); }
    )
  }

  //Numeros aleatorios
getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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


}
