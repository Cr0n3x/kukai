import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NewWalletComponent } from './components/new-wallet/new-wallet.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { WalletService } from './services/wallet.service';


@NgModule({
  declarations: [
    AppComponent,
    NewWalletComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService, WalletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
