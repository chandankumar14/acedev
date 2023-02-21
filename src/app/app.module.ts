import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './Shared/Component/menu/top-menu.component';
import { FooterBarComponent } from './Shared/Component/footer/footer-bar.component';
import {PrimengModule} from "./Shared/primeng/primeng.module"

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
