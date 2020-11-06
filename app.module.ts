import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinervaComponent } from './minerva/minerva.component';
import { AromaComponent } from './aroma/aroma.component';
import { GadComponent } from './gad/gad.component';
import { IlaComponent } from './ila/ila.component';
import { KaizenComponent } from './kaizen/kaizen.component';
import { LotusComponent } from './lotus/lotus.component';
import { OrienComponent } from './orien/orien.component';
import { SweetComponent } from './sweet/sweet.component';
import { TajComponent } from './taj/taj.component';
import { TflComponent } from './tfl/tfl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MinervaComponent,
    AromaComponent,
    GadComponent,
    IlaComponent,
    KaizenComponent,
    LotusComponent,
    OrienComponent,
    SweetComponent,
    TajComponent,
    TflComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
