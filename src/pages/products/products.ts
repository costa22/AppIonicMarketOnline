import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  jsonGlobal: any[];
  jsonFiltrar: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public rest: RestProvider
  ){
   this.jsonGlobal = rest.initProducts();
   this.jsonFiltrar = this.jsonGlobal;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  getproducts(ev) {
    this.jsonFiltrar = this.jsonGlobal;
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.jsonFiltrar = this.jsonFiltrar.filter((product) => {
        return (product.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  gotoproducts(){
	this.navCtrl.push('HomePage');
	}

  gotomodal(product){
      console.log(product);
      let modal = this.modalCtrl.create(ModalPage, product);
      modal.onDidDismiss(data => {
        console.log(data);
      });
      modal.present();
  }


  /*initProducts() {
    var products = [
  {
     id: '1',
     nombre: 'Silla',
     color: 'Azul',
     talla: 'XL',
     precio: '17'
   },
   {
     id: '2',
     nombre: 'Cama',
     color: 'Negro',
     talla: 'XS',
     precio: '34'
   },
   {
     id: '3',
     nombre: 'Mordedor',
     color: 'Rojo',
     talla: 'XL',
     precio: '31'
   },
   {
     id: '4',
     nombre: 'Arañador',
     color: 'Blanco',
     talla: 'M',
     precio: '50'
   },
   {
     id: '5',
     nombre: 'Juguete',
     color: 'Azul',
     talla: 'L',
     precio: '24'
   },
   {
     id: '6',
     nombre: 'Mesa',
     color: 'Negro',
     talla: 'S',
     precio: '3'
   },
   {
     id: '7',
     nombre: 'Puerta',
     color: 'Rojo',
     talla: 'XL',
     precio: '34'
   },
   {
     id: '8',
     nombre: 'Colchon',
     color: 'Blanco',
     talla: 'XS',
     precio: '50'
   },
   {
     id: '9',
     nombre: 'Manta',
     color: 'Rojo',
     talla: 'XL',
     precio: '17'
   },
   {
     id: '10',
     nombre: 'Arañador',
     color: 'Blanco',
     talla: 'M',
     precio: '28'
   },
   {
     id: '11',
     nombre: 'Juguete',
     color: 'Blanco',
     talla: 'L',
     precio: '40'
   },
   {
     id: '12',
     nombre: 'Audio',
     color: 'Azul',
     talla: 'X',
     precio: '180'
   },
   {
     id: '13',
     nombre: 'Puerta',
     color: 'Negro',
     talla: 'XL',
     precio: '16'
   },
   {
     id: '14',
     nombre: 'Colchon',
     color: 'Rojo',
     talla: 'L',
     precio: '7'
   },
   {
     id: '15',
     nombre: 'Manta',
     color: 'Blanco',
     talla: 'S',
     precio: '50'
   },
   {
     id: '16',
     nombre: 'Volador',
     color: 'Rojo',
     talla: 'XS',
     precio: '15'
   },
   {
     id: '17',
     nombre: 'TV',
     color: 'Blanco',
     talla: 'XL',
     precio: '7'
   },
   {
     id: '18',
     nombre: 'Arañador',
     color: 'Rojo',
     talla: 'M',
     precio: '1'
   },
   {
     id: '19',
     nombre: 'Juguete',
     color: 'Blanco',
     talla: 'L',
     precio: '20'
   },
   {
     id: '20',
     nombre: 'Mesa',
     color: 'Azul',
     talla: 'S',
     precio: '10'
   },
   {
     id: '21',
     nombre: 'Puerta',
     color: 'Negro',
     talla: 'XL',
     precio: '3'
   },
   {
     id: '22',
     nombre: 'Colchon',
     color: 'Fucsia',
     talla: 'S',
     precio: '48'
   },
   {
     id: '23',
     nombre: 'Manta',
     color: 'Celeste',
     talla: 'XL',
     precio: '17'
   },
   {
     id: '24',
     nombre: 'Arañador',
     color: 'Azul',
     talla: 'XS',
     precio: '26'
   },
   {
     id: '25',
     nombre: 'Juguete',
     color: 'Negro',
     talla: 'XL',
     precio: '43'
   },
   {
     id: '26',
     nombre: 'Silla',
     color: 'Azul',
     talla: 'XL',
     precio: '49'
   },
   {
     id: '27',
     nombre: 'Cama',
     color: 'Negro',
     talla: 'XS',
     precio: '12'
   },
   {
     id: '28',
     nombre: 'Mordedor',
     color: 'Rojo',
     talla: 'XL',
     precio: '15'
   },
   {
     id: '29',
     nombre: 'Arañador',
     color: 'Blanco',
     talla: 'M',
     precio: '37'
   },
   {
     id: '30',
     nombre: 'Juguete',
     color: 'Azul',
     talla: 'L',
     precio: '36'
   },
   {
     id: '31',
     nombre: 'Mesa',
     color: 'Negro',
     talla: 'S',
     precio: '6'
   },
   {
     id: '32',
     nombre: 'Puerta',
     color: 'Rojo',
     talla: 'XL',
     precio: '47'
   },
   {
     id: '33',
     nombre: 'Colchon',
     color: 'Blanco',
     talla: 'XS',
     precio: '7'
   },
   {
     id: '34',
     nombre: 'Manta',
     color: 'Rojo',
     talla: 'XL',
     precio: '18'
   },
   {
     id: '35',
     nombre: 'Arañador',
     color: 'Blanco',
     talla: 'M',
     precio: '23'
   },
   {
     id: '36',
     nombre: 'Juguete',
     color: 'Blanco',
     talla: 'L',
     precio: '29'
   },
   {
     id: '37',
     nombre: 'Mesa',
     color: 'Azul',
     talla: 'S',
     precio: '42'
   },
   {
     id: '38',
     nombre: 'Puerta',
     color: 'Negro',
     talla: 'XL',
     precio: '5'
   },
   {
     id: '39',
     nombre: 'Colchon',
     color: 'Rojo',
     talla: 'L',
     precio: '40'
   },
   {
     id: '40',
     nombre: 'Manta',
     color: 'Blanco',
     talla: 'S',
     precio: '33'
   },
   {
     id: '41',
     nombre: 'Volador',
     color: 'Rojo',
     talla: 'XS',
     precio: '41'
   },
   {
     id: '42',
     nombre: 'TV',
     color: 'Blanco',
     talla: 'XL',
     precio: '11'
   },
   {
     id: '43',
     nombre: 'Arañador',
     color: 'Rojo',
     talla: 'M',
     precio: '47'
   },
   {
     id: '44',
     nombre: 'Juguete',
     color: 'Blanco',
     talla: 'L',
     precio: '31'
   },
   {
     id: '45',
     nombre: 'Mesa',
     color: 'Azul',
     talla: 'S',
     precio: '14'
   },
   {
     id: '46',
     nombre: 'Puerta',
     color: 'Negro',
     talla: 'XL',
     precio: '30'
   },
   {
     id: '47',
     nombre: 'Colchon',
     color: 'Fucsia',
     talla: 'S',
     precio: '33'
   },
   {
     id: '48',
     nombre: 'Manta',
     color: 'Celeste',
     talla: 'XL',
     precio: '50'
   },
   {
     id: '49',
     nombre: 'Arañador',
     color: 'Azul',
     talla: 'XS',
     precio: '34'
   },
   {
     id: '50',
     nombre: 'Juguete',
     color: 'Negro',
     talla: 'XL',
     precio: '46'
   },
   {
     id: '51',
     nombre: 'Mesa',
     color: 'Rojo',
     talla: 'M',
     precio: '50'
   },
   {
     id: '52',
     nombre: 'Puerta',
     color: 'Blanco',
     talla: 'L',
     precio: '11'
   },
   {
     id: '53',
     nombre: 'Manta',
     color: 'Negro',
     talla: 'S',
     precio: '14'
   },
   {
     id: '54',
     nombre: 'Arañador',
     color: 'Rojo',
     talla: 'XL',
     precio: '27'
   },
   {
     id: '55',
     nombre: 'Juguete',
     color: 'Blanco',
     talla: 'S',
     precio: '2'
   },
   {
     id: '56',
     nombre: 'Mesa',
     color: 'Rojo',
     talla: 'XL',
     precio: '32'
   },
   {
     id: '57',
     nombre: 'Puerta',
     color: 'Blanco',
     talla: 'XL',
     precio: '13'
   },
   {
     id: '58',
     nombre: 'Juguete',
     color: 'Fucsia',
     talla: 'M',
     precio: '8'
   },
   {
     id: '59',
     nombre: 'Mesa',
     color: 'Celeste',
     talla: 'L',
     precio: '49'
   },
   {
     id: '60',
     nombre: 'Puerta',
     color: 'Azul',
     talla: 'S',
     precio: '4'
   },
   {
     id: '61',
     nombre: 'Colchon',
     color: 'Negro',
     talla: 'XL',
     precio: '44'
   },
   {
     id: '62',
     nombre: 'Mesa',
     color: 'Rojo',
     talla: 'M',
     precio: '11'
   },
   {
     id: '63',
     nombre: 'Puerta',
     color: 'Blanco',
     talla: 'L',
     precio: '1'
   },
   {
     id: '64',
     nombre: 'Manta',
     color: 'Negro',
     talla: 'S',
     precio: '20'
   },
   {
     id: '65',
     nombre: 'Arañador',
     color: 'Rojo',
     talla: 'XL',
     precio: '27'
   },
   {
     id: '66',
     nombre: 'Juguete',
     color: 'Blanco',
     talla: 'S',
     precio: '3'
   },
   {
     id: '67',
     nombre: 'Mesa',
     color: 'Rojo',
     talla: 'XL',
     precio: '3'
   },
   {
     id: '68',
     nombre: 'Puerta',
     color: 'Blanco',
     talla: 'XL',
     precio: '10'
   },
   {
     id: '69',
     nombre: 'Juguete',
     color: 'Fucsia',
     talla: 'M',
     precio: '45'
   },
   {
     id: '70',
     nombre: 'Mesa',
     color: 'Celeste',
     talla: 'L',
     precio: '4'
   },
   {
     id: '71',
     nombre: 'Puerta',
     color: 'Azul',
     talla: 'S',
     precio: '33'
   },
   {
     id: '72',
     nombre: 'Colchon',
     color: 'Negro',
     talla: 'XL',
     precio: '38'
   }];
   return products;
 }*/

}
