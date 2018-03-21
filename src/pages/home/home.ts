import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CallNumber } from '@ionic-native/call-number';
import { User } from "../../models/user";
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  image: string = null;
  user = {} as User;


  constructor(public alertCtrl: AlertController,
  app: App, menu: MenuController,
  public navCtrl: NavController,
  public navParams: NavParams,
  private camera: Camera,
  private callNumber: CallNumber,
  private storage: Storage,
  private toastCtrl: ToastController
  )
  {
    this.loadData();
    this.presentToast();
  }

  ionViewDidLoad() {
    console.log('Vista HomePage');
  }

  presentToast() {
    this.user.email = 'Adrian';
  let toast = this.toastCtrl.create({
    message: this.user.email+' Bienvenido',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

  loadData(){
    this.storage.get('email').then((val) => {
    this.user.email = val;
    });
  }

  gotocall($number){
    this.callNumber.callNumber($number, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensaje',
      message: 'Mensaje de prueba',
      buttons: ['Ok']
    });
    alert.present();
	}
  opciones = [
    'Products','Offers','Purchases','Cart','Text','Lists'
  ]
  goto($page){
    console.log('go to '+$page);
    this.navCtrl.push($page+'Page');
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }

}
