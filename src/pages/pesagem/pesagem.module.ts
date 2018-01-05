import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesagemPage } from './pesagem';
import { PesagemProvider } from '../../providers/pesagem/pesagem';

@NgModule({
  declarations: [
    PesagemPage,
  ],
  providers: [
    PesagemProvider
  ],
  imports: [
    IonicPageModule.forChild(PesagemPage),
  ],
})
export class PesagemPageModule {}
