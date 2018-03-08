 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class RestProvider {

  randomUrl = 'https://randomuser.me/api/?results=25';

    page: string;
  constructor(
    public http: HttpClient,
    private afAuth: AngularFireAuth) {
    console.log('RestProvider Cargado');
  }

  getUsersRandom() {
      return this.http.get(this.randomUrl);
  }

  loginFB(email:string, password:string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(user=>Promise.resolve(user))
        .catch(err=>Promise.reject(err))
  }
  catch(e){
    console.log(e);
  }
  initProducts() {
    var products = [
  {
     id: '1',
     nombre: 'Silla',
     color: 'azul',
     talla: 'XL',
     precio: '17'
   },
   {
     id: '2',
     nombre: 'Cama',
     color: 'negro',
     talla: 'XS',
     precio: '34'
   },
   {
     id: '3',
     nombre: 'Mordedor',
     color: 'rojo',
     talla: 'XL',
     precio: '31'
   },
   {
     id: '4',
     nombre: 'Arañador',
     color: 'blanco',
     talla: 'M',
     precio: '50'
   },
   {
     id: '5',
     nombre: 'Juguete',
     color: 'azul',
     talla: 'L',
     precio: '24'
   },
   {
     id: '6',
     nombre: 'Mesa',
     color: 'negro',
     talla: 'S',
     precio: '3'
   },
   {
     id: '7',
     nombre: 'Puerta',
     color: 'rojo',
     talla: 'XL',
     precio: '34'
   },
   {
     id: '8',
     nombre: 'Colchon',
     color: 'blanco',
     talla: 'XS',
     precio: '50'
   },
   {
     id: '9',
     nombre: 'Manta',
     color: 'rojo',
     talla: 'XL',
     precio: '17'
   },
   {
     id: '10',
     nombre: 'Arañador',
     color: 'blanco',
     talla: 'M',
     precio: '28'
   },
   {
     id: '11',
     nombre: 'Juguete',
     color: 'blanco',
     talla: 'L',
     precio: '40'
   },
   {
     id: '12',
     nombre: 'Audio',
     color: 'azul',
     talla: 'X',
     precio: '180'
   },
   {
     id: '13',
     nombre: 'Puerta',
     color: 'negro',
     talla: 'XL',
     precio: '16'
   },
   {
     id: '14',
     nombre: 'Colchon',
     color: 'rojo',
     talla: 'L',
     precio: '7'
   },
   {
     id: '15',
     nombre: 'Manta',
     color: 'blanco',
     talla: 'S',
     precio: '50'
   },
   {
     id: '16',
     nombre: 'Volador',
     color: 'rojo',
     talla: 'XS',
     precio: '15'
   },
   {
     id: '17',
     nombre: 'TV',
     color: 'blanco',
     talla: 'XL',
     precio: '7'
   },
   {
     id: '18',
     nombre: 'Arañador',
     color: 'rojo',
     talla: 'M',
     precio: '1'
   },
   {
     id: '19',
     nombre: 'Juguete',
     color: 'blanco',
     talla: 'L',
     precio: '20'
   },
   {
     id: '20',
     nombre: 'Mesa',
     color: 'azul',
     talla: 'S',
     precio: '10'
   },
   {
     id: '21',
     nombre: 'Puerta',
     color: 'negro',
     talla: 'XL',
     precio: '3'
   },
   {
     id: '22',
     nombre: 'Colchon',
     color: 'morado',
     talla: 'S',
     precio: '48'
   },
   {
     id: '23',
     nombre: 'Manta',
     color: 'azul',
     talla: 'XL',
     precio: '17'
   },
   {
     id: '24',
     nombre: 'Arañador',
     color: 'amarillo',
     talla: 'XS',
     precio: '26'
   },
   {
     id: '25',
     nombre: 'Juguete',
     color: 'negro',
     talla: 'XL',
     precio: '43'
   },
   {
     id: '26',
     nombre: 'Silla',
     color: 'azul',
     talla: 'XL',
     precio: '49'
   },
   {
     id: '27',
     nombre: 'Cama',
     color: 'amarillo',
     talla: 'XS',
     precio: '12'
   },
   {
     id: '28',
     nombre: 'Mordedor',
     color: 'rojo',
     talla: 'XL',
     precio: '15'
   },
   {
     id: '29',
     nombre: 'Arañador',
     color: 'blanco',
     talla: 'M',
     precio: '37'
   },
   {
     id: '30',
     nombre: 'Juguete',
     color: 'azul',
     talla: 'L',
     precio: '36'
   },
   {
     id: '31',
     nombre: 'Mesa',
     color: 'amarillo',
     talla: 'S',
     precio: '6'
   },
   {
     id: '32',
     nombre: 'Puerta',
     color: 'rojo',
     talla: 'XL',
     precio: '47'
   },
   {
     id: '33',
     nombre: 'Colchon',
     color: 'blanco',
     talla: 'XS',
     precio: '7'
   },
   {
     id: '34',
     nombre: 'Manta',
     color: 'rojo',
     talla: 'XL',
     precio: '18'
   },
   {
     id: '35',
     nombre: 'Arañador',
     color: 'amarillo',
     talla: 'M',
     precio: '23'
   },
   {
     id: '36',
     nombre: 'Juguete',
     color: 'blanco',
     talla: 'L',
     precio: '29'
   },
   {
     id: '37',
     nombre: 'Mesa',
     color: 'azul',
     talla: 'S',
     precio: '42'
   },
   {
     id: '38',
     nombre: 'Puerta',
     color: 'amarillo',
     talla: 'XL',
     precio: '5'
   },
   {
     id: '39',
     nombre: 'Colchon',
     color: 'rojo',
     talla: 'L',
     precio: '40'
   },
   {
     id: '40',
     nombre: 'Manta',
     color: 'blanco',
     talla: 'S',
     precio: '33'
   },
   {
     id: '41',
     nombre: 'Volador',
     color: 'verde',
     talla: 'XS',
     precio: '41'
   },
   {
     id: '42',
     nombre: 'TV',
     color: 'blanco',
     talla: 'XL',
     precio: '11'
   },
   {
     id: '43',
     nombre: 'Arañador',
     color: 'rojo',
     talla: 'M',
     precio: '47'
   },
   {
     id: '44',
     nombre: 'Juguete',
     color: 'verde',
     talla: 'L',
     precio: '31'
   },
   {
     id: '45',
     nombre: 'Mesa',
     color: 'azul',
     talla: 'S',
     precio: '14'
   },
   {
     id: '46',
     nombre: 'Puerta',
     color: 'negro',
     talla: 'XL',
     precio: '30'
   },
   {
     id: '47',
     nombre: 'Colchon',
     color: 'morado',
     talla: 'S',
     precio: '33'
   },
   {
     id: '48',
     nombre: 'Manta',
     color: 'verde',
     talla: 'XL',
     precio: '50'
   },
   {
     id: '49',
     nombre: 'Arañador',
     color: 'azul',
     talla: 'XS',
     precio: '34'
   },
   {
     id: '50',
     nombre: 'Juguete',
     color: 'negro',
     talla: 'XL',
     precio: '46'
   },
   {
     id: '51',
     nombre: 'Mesa',
     color: 'rojo',
     talla: 'M',
     precio: '50'
   },
   {
     id: '52',
     nombre: 'Puerta',
     color: 'verde',
     talla: 'L',
     precio: '11'
   },
   {
     id: '53',
     nombre: 'Manta',
     color: 'negro',
     talla: 'S',
     precio: '14'
   },
   {
     id: '54',
     nombre: 'Arañador',
     color: 'rojo',
     talla: 'XL',
     precio: '27'
   },
   {
     id: '55',
     nombre: 'Juguete',
     color: 'blanco',
     talla: 'S',
     precio: '2'
   },
   {
     id: '56',
     nombre: 'Mesa',
     color: 'rojo',
     talla: 'XL',
     precio: '32'
   },
   {
     id: '57',
     nombre: 'Puerta',
     color: 'blanco',
     talla: 'XL',
     precio: '13'
   },
   {
     id: '58',
     nombre: 'Juguete',
     color: 'verde',
     talla: 'M',
     precio: '8'
   },
   {
     id: '59',
     nombre: 'Mesa',
     color: 'azul',
     talla: 'L',
     precio: '49'
   },
   {
     id: '60',
     nombre: 'Puerta',
     color: 'azul',
     talla: 'S',
     precio: '4'
   },
   {
     id: '61',
     nombre: 'Colchon',
     color: 'verde',
     talla: 'XL',
     precio: '44'
   },
   {
     id: '62',
     nombre: 'Mesa',
     color: 'rojo',
     talla: 'M',
     precio: '11'
   },
   {
     id: '63',
     nombre: 'Puerta',
     color: 'blanco',
     talla: 'L',
     precio: '1'
   },
   {
     id: '64',
     nombre: 'Manta',
     color: 'negro',
     talla: 'S',
     precio: '20'
   },
   {
     id: '65',
     nombre: 'Arañador',
     color: 'rojo',
     talla: 'XL',
     precio: '27'
   },
   {
     id: '66',
     nombre: 'Juguete',
     color: 'blanco',
     talla: 'S',
     precio: '3'
   },
   {
     id: '67',
     nombre: 'Mesa',
     color: 'rojo',
     talla: 'XL',
     precio: '3'
   },
   {
     id: '68',
     nombre: 'Puerta',
     color: 'blanco',
     talla: 'XL',
     precio: '10'
   },
   {
     id: '69',
     nombre: 'Juguete',
     color: 'morado',
     talla: 'M',
     precio: '45'
   },
   {
     id: '70',
     nombre: 'Mesa',
     color: 'azul',
     talla: 'L',
     precio: '4'
   },
   {
     id: '71',
     nombre: 'Puerta',
     color: 'azul',
     talla: 'S',
     precio: '33'
   },
   {
     id: '72',
     nombre: 'Colchon',
     color: 'negro',
     talla: 'XL',
     precio: '38'
   }];
   return products;
 }

}
