import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStoreModule } from './store/app/app-store.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppStoreModule,
    HttpClientModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
