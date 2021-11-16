import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas//

import { app_routing } from "./app.routers";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { ComprasComponent } from './components/compras/compras.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComprasComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    app_routing,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
