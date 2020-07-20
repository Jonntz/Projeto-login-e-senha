import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './telas/headers/headers.component';
import { LoginComponent } from './telas/mains/login/login.component';
import { CadastroComponent } from './telas/mains/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }