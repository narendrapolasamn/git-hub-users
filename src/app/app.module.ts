import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent, FavouriteComponent, UserDeatailsComponent, UserReposComponent } from './components';
import { MaterialModule } from './material.module';
import { UserEffects } from './store/effects';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    UserDeatailsComponent,
    UserReposComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
