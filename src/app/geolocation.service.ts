import { Injectable } from '@angular/core';
import { PlaceLocation } from 'app/logic/PlaceLocation';

@Injectable()
export class GeolocationService {

  constructor() { }

  requestLocation(cb) {
    // W3C Geolation API
    navigator.geolocation.getCurrentPosition(position => {
      cb(position.coords)
    },
      error => {
        cb(null)
      })
  }
  getMapLink(location: PlaceLocation) {
    // Universal link
    // < href="https://maps.google.com/?q=Eiffel+Tower">
    //  < href="https://maps.apple.com/?q=34.44,56.44">
    let query = ''
    if (location.latitude) {
      query = location.latitude + ',' + location.longitude
    } else {
      query = `${location.address}, ${location.city}`
    }

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${query}`
    } else {
      return `https://maps.google.com/?q=${query}`
    }
  }
}
