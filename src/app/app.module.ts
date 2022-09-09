import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { GenComponent } from './gen/gen.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QrscannerComponent } from './gen/qrscanner/qrscanner.component';
import { AdminComponent } from './admin/admin.component';
import { AdminqrscannerComponent } from './admin/adminqrscanner/adminqrscanner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GenComponent,
    QrscannerComponent,
    AdminComponent,
    AdminqrscannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxScannerQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
