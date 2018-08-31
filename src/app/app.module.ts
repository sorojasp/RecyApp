import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { VideoComponent } from './video/video.component';
import { SliderComponent } from './slider/slider.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { PruebaAsideComponent } from './prueba-aside/prueba-aside.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeneficiosComponent,
    VideoComponent,
    SliderComponent,
    BotoneraComponent,
    PruebaAsideComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
