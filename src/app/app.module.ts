import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})

export class AppModule implements DoBootstrap {

  constructor(private injector: Injector){}

  ngDoBootstrap(): void {
    const customElement = createCustomElement(AppComponent, { injector:this.injector });
    console.log("doBootstrap")
    customElements.define('angular-web-component-v14', customElement);
  }
}
