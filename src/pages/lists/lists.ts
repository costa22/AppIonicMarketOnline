import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {
  inputtext: string;
  lists: any[] = [];
  msg: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {
      this.loadData();
}

addMsg(){
  this.storage.get('lists').then((val) => {
    if(val != null){
      this.lists = val;
    }
  });
  this.lists.push(this.inputtext);
  this.storage.set('lists',this.lists);
  this.msg = "";
  this.loadData();
}

loadData(){
  this.storage.get('lists').then((val) => {
    if(val != null){
      this.lists = val;

    }else{
      this.lists= [];
    }
  });
}

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
