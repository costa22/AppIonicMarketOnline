import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-text',
  templateUrl: 'text.html',
})
export class TextPage {
  msg: string;
  text: any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage)
    {
      this.loadData();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextPage');
  }
  addMsg(){
    this.storage.get('text').then((val) => {
      if(val != null){
        this.text = val;
      }
    });
    this.text.push(this.msg);
    this.storage.set('text',this.text);
    this.msg = "";
    this.loadData();
  }

  loadData(){
    this.storage.get('text').then((val) => {
      if(val != null){
        this.text = val;

      }else{
        this.text= [];
      }
    });
  }

  deleteall(){
    this.storage.remove('text');
    this.loadData();
  }


}
