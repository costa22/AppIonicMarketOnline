import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-purchases',
  templateUrl: 'purchases.html',
})
export class PurchasesPage {
  facturas: any[];
  contrast: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.facturas = this.initFechas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchasesPage');
  }

  initFechas() {
    var facturas = [
  {
    "id": 1,
    "dia": "30",
    "mes": "Junio",
    "year": "2018",
    "total": "1480"
  },
  {
    "id": 2,
    "dia": "24",
    "mes": "Febrero",
    "year": "2018",
    "total": "3890"
  },
  {
    "id": 3,
    "dia": "15",
    "mes": "Mayo",
    "year": "2018",
    "total": "97500"
  },
  {
    "id": 4,
    "dia": "14",
    "mes": "Abril",
    "year": "2017",
    "total": "1450"
  }
];
  return facturas;
}

}
