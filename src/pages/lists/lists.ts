import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
}
  items = [
    'Pedido Viernes',
    'Gatos',
    'Black Friday',
    '05/02/2018',
    'Promoción Camas',
	  'Promoción Web'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
