import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  image: string = null;

  constructor(public alertCtrl: AlertController,
  app: App, menu: MenuController,
  public navCtrl: NavController,
  public navParams: NavParams,
  private camera: Camera,
  private callNumber: CallNumber
  )

  {
	menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  gotocall(){
    this.callNumber.callNumber("18001010101", true)
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
