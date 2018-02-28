import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {
  items: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider
  ) { this.initializeItems(); }

  initializeItems(){
    this.restProvider.getUsersRandom()
    .subscribe(
      (data) => { this.items = data['results'];},
      (error) =>{ console.error(error); }
    )
  }

  getItems(ev) {
    this.initializeItems();
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.email.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage');
  }

}
