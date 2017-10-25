import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GeolocationService } from './geolocation.service'
import { DataService } from './data.service'
import { AppComponent } from './app.component';


//  Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatIconModule, MatInputModule, 
                MatSelectModule, MatSliderModule, MatToolbarModule,
                MatCardModule, MatSlideToggleModule, MatSnackBarModule } from '@angular/material'

import { ServiceWorkerModule,NgServiceWorker } from '@angular/service-worker'


import 'hammerjs';
import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component'

import {   Routes, RouterModule } from '@angular/router'


const routes: Routes = [
  { path: '', component:ListComponent},
  { path: 'coffee', component: CoffeeComponent},
  { path: 'coffee/:id', component: CoffeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    ServiceWorkerModule
  ],
  providers: [GeolocationService,DataService,NgServiceWorker],
  bootstrap: [AppComponent]
})
export class AppModule { }
