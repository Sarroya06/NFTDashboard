import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MyNftsComponent } from './my-nfts/my-nfts.component';
import { WalletComponent } from './wallet/wallet.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { SellerItemComponent } from './seller-item/seller-item.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    MarketplaceComponent,
    MyNftsComponent,
    WalletComponent,
    FavouritesComponent,
    HistoryComponent,
    SettingsComponent,
    SellerItemComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
