import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;
  public subpages: Array<{ titulo: string, component: any, page: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen)
  {
    this.rootPage = 'LoginPage';
    this.pages = [
      { titulo: 'Inicio', component: 'HomePage', icon: 'home' },
      { titulo: 'Inicio', component: 'HomePage', icon: 'home' },
      { titulo: 'Productos', component: 'ProductsPage', icon: 'albums'},
        { titulo: 'Categorias', component: 'CategoriesPage', icon: 'archive'},
        { titulo: 'Ofertas ', component: 'OffersPage', icon: 'megaphone'},
        { titulo: 'Promociones ', component: 'OffersPage', icon: 'pricetags'},
        { titulo: 'Mis pedidos', component: 'PurchasesPage', icon: 'clipboard'},
        { titulo: 'Mis envios', component: 'PurchasesPage', icon: 'cube'},
        { titulo: 'Ahora o nunca', component: 'NotificationsPage', icon: 'flame'},
      { titulo: 'Incidencias', component: 'NotificationsPage', icon: 'bug'},
      { titulo: 'Dónde estamos', component: 'OthersPage', icon: 'pin'},
      { titulo: 'Mis datos', component: 'NotificationsPage', icon: 'contacts'},
      { titulo: 'Notificaciones', component: 'NotificationsPage', icon: 'alert'},
      { titulo: 'Ajustes', component: 'NotificationsPage', icon: 'build'},
      { titulo: 'Más opciones', component: 'OthersPage', icon: 'add'}
    ];
    this.subpages = [
      { titulo: 'Submenu1', component: 'HomePage', page: 'HomePage' },
      { titulo: 'Submenu2', component: 'CartPage', page: 'Cartpage' },
      { titulo: 'Submenu3', component: 'OffersPage', page: 'CartPage'},
      { titulo: 'Submenu4', component: 'ProductPage', page: 'CartPage'},
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  goto(page){
    this.nav.setRoot(page);
  }

}
