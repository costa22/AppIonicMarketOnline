import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  products: any[] = []; 
  status: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
  ) { this.getproducts(); }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  getproducts(){
    this.restProvider.getproducts()
    .subscribe(
      (data) => {
      this.products = data['result'];
      console.log(this.products);
      },
      (error) =>{ console.error(error); }
    )
  }

}
