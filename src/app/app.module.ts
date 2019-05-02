import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Firebase } from '@ionic-native/firebase/ngx';

import { AngularFireModule } from '@angular/Fire';
import { AngularFirestoreModule } from '@angular/Fire/firestore';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AppRoutingModule } from './app-routing.module';


const config = {
  apiKey: "AIzaSyAfPe3obfn5-uXSAIo04V7ZKLVUA3X2BcY",
  authDomain: "pushnotifications-44f1b.firebaseapp.com",
  databaseURL: "https://pushnotifications-44f1b.firebaseio.com",
  projectId: "pushnotifications-44f1b",
  storageBucket: "pushnotifications-44f1b.appspot.com",
  messagingSenderId: "1021962089268"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config), 
    AngularFirestoreModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Firebase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
