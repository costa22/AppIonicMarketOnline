import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  products: any[];
  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public rest: RestProvider
  ) { this.products = rest.initProducts(); }

  getUsersRandom(){
    this.rest.getUsersRandom()
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
    console.log('ionViewDidLoad OffersPage');
  }

}
