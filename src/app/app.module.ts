import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { ModalPage } from '../pages/modal/modal';

export const firebaseconfig = {
    apiKey: "AIzaSyDneLPJsdLkjXXNvWT7_wuL67vMNoKKPNs",
    authDomain: "appdemo-71093.firebaseapp.com",
    databaseURL: "https://appdemo-71093.firebaseio.com",
    storageBucket: "appdemo-71093.appspot.com",
    messagingSenderId: "1060625660607"
  };

@NgModule({
  declarations: [
    MyApp,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseconfig),
	AngularFireAuthModule,
  HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
