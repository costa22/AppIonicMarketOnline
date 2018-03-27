import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  jsonGlobal: any[];
  jsonFiltrar: any[];
  cart: any[] = [];
  product: {};
  resultSearch: string = this.params.get('inputtext');

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public rest: RestProvider) {
      this.jsonGlobal = rest.initProducts();
      this.jsonFiltrar = this.jsonGlobal;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
