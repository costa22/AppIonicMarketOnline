import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  private camera: Camera
  )

  {
	menu.enable(true);
  }

	gotolist(){
	this.navCtrl.push('ListsPage');
	}
	gotocart(){
	this.navCtrl.push('CartPage');
	}
	gotoothers(){
	this.navCtrl.push('OthersPage');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensaje',
      message: 'Mensaje de prueba',
      buttons: ['Ok']
    });
    alert.present();
	}
  categories = [
    'Products','Offers','Purchases'
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
