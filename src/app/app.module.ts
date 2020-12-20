import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsDateCorrectDirective } from './directives/is-date-correct.directive';
import { IsOddsCorrectDirective } from './directives/is-odds-correct.directive';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    EditComponent,
    NotFoundComponent,
    IsDateCorrectDirective,
    IsOddsCorrectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
