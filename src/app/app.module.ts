import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PesagemPage } from '../pages/pesagem/pesagem';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MuralProvider } from '../providers/mural/mural';
import { HttpModule } from '@angular/http';
import { MeusDadosPage } from '../pages/meus-dados/meus-dados';
import { PerfilProvider } from '../providers/perfil/perfil';
import { PesagemProvider } from '../providers/pesagem/pesagem';
import { LoginProvider } from '../providers/login/login';


@NgModule({
  declarations: [
    MyApp,
    MeusDadosPage,
    HomePage,
    TabsPage,
    LoginPage,
    PesagemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    PesagemPage,
    MeusDadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MuralProvider,
    PerfilProvider,
    PesagemProvider,
    LoginProvider
  ]
})
export class AppModule {}
