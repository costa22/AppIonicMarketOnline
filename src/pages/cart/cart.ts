import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public restProvider: RestProvider
  ) {
    this.getUsersRandom();
  }

  getUsersRandom(){
    this.restProvider.getUsersRandom()
    .subscribe(
      (data) => { this.users = data['results'] },
      (error) =>{ console.error(error); }
    )
  }

  //Numeros aleatorios
getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

  /*//API Users
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      //console.log(this.users);
    });
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
