import { Injectable } from '@angular/core';
import { PlaceLocation } from 'app/logic/PlaceLocation';
import { Coffee } from 'app/logic/Coffee';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  public endpoint = "http://localhost:3000/"
  constructor(private http:Http) { }

  get(coffeeId:string,callback) {
    this.http.get(`${this.endpoint}coffees/${coffeeId}`).subscribe(response => {
      callback(response.json())
    })
  }

  getList(cb) {
    // const list = [
    //   new Coffee("Double Expresso","Sunny Cafe",new PlaceLocation("123 Market St","San Francisco")),
    //   new Coffee("Caramel Americano","Starcoffee", new PlaceLocation("Gran Via 34","Madrid"))
    // ]
    // cb(list)
    this.http.get(`${this.endpoint}coffees`).subscribe( response  => {
      console.log(response.json());
      cb(response.json());
    })
  }

  save(coffee,cb) {
    if ( coffee._id) {
      // It's an update
      this.http.put(`${this.endpoint}coffees/${coffee._id}`,coffee).subscribe(response => {
        cb(response)
      })
    } else  {
      // It's an insert
      this.http.post(`${this.endpoint}coffees`,coffee).subscribe(respones => {
        cb(respones)
      })
    }}
}
