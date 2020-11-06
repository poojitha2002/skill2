import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AromaComponent } from './aroma/aroma.component';
import { GadComponent } from './gad/gad.component';
import { IlaComponent } from './ila/ila.component';
import { KaizenComponent } from './kaizen/kaizen.component';
import { LotusComponent } from './lotus/lotus.component';
import { MinervaComponent } from './minerva/minerva.component';
import { OrienComponent } from './orien/orien.component';
import { SweetComponent } from './sweet/sweet.component';
import { TajComponent } from './taj/taj.component';
import { TflComponent } from './tfl/tfl.component';

const routes: Routes = [
  {path:'aroma',component:AromaComponent},
  {path:'gad',component:GadComponent},
  {path:'ila',component:IlaComponent},
  {path:'kaizen',component:KaizenComponent},
  {path:'lotus',component:LotusComponent},
  {path:'minerva',component:MinervaComponent},
  {path:'orien',component:OrienComponent},
  {path:'sweet',component:SweetComponent},
  {path:'taj',component:TajComponent},
  {path:'tfl',component:TflComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
