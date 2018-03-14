import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {
  products: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
  ) { this.restProvider.initProducts(); }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage');
  }
  goto($page){
    console.log('go to '+$page);
    this.navCtrl.push($page+'Page');
  }
}
