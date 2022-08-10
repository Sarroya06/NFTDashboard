import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNftComponent } from './create-nft/create-nft.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MyNftsComponent } from './my-nfts/my-nfts.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'marketplace', component:MarketplaceComponent},
  {path:'my-nfts', component:MyNftsComponent},
  {path:'', component:DashboardComponent},
  { path: 'create-nft', component: CreateNftComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
