import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from '../tabs/tabs.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';

@NgModule({
  imports:      [ BrowserModule, TabsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
