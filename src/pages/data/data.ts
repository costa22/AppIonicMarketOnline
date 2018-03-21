import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { User } from "../../models/user";

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
  user = {} as User;

  constructor(
  public navCtrl: NavController,
  private storage: Storage) {
    this.loadData();
  }

  loadData(){
    this.storage.get('email').then((val) => {
    this.user.email = val;
    });
  }

  goto($page){
    console.log('go to '+$page);
    this.navCtrl.push($page+'Page');
  }
}
