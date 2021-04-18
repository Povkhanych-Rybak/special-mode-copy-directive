import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyDirective } from './copy.directive';
import { ReusableComponent } from './reusable/reusable.component';
import { ContentReplaceDirective } from './content-replace.directive';

@NgModule({
  declarations: [
    AppComponent,
    CopyDirective,
    ReusableComponent,
    ContentReplaceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
