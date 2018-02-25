import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {
  //URL de APIs
  //apiUrl = 'https://jsonplaceholder.typicode.com';
  randomUrl = 'https://randomuser.me/api/?results=25';
  2closetsUrl = 'https://www.2closets.com/api/products/1';
  productsUrl = 'https://api.printful.com/products';
  dogUrl = 'https://dog.ceo/api/breeds/image/random';
  randomUsers ='https://randomname.de/api/';

  constructor(public http: HttpClient) {
    console.log('RestProvider Cargado');
  }
    getUsersRandom() {
      return this.http.get(this.randomUrl);
    }
    getproducts(){
      return this.http.get(this.productsUrl);
    }
    getdogs(){
      return this.http.get(this.dogUrl);
    }

  /*getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users').subscribe(data => {
      resolve(data);
      //console.log(data);
    }, err => {
      console.log(err);
    });
  });
}

  addUser(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/users', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}*/

}
