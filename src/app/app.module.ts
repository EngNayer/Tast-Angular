import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent, FooterComponent } from './shared';
import { HomeComponent, AboutComponent } from './page';
import { LoginComponent, SignUpComponent, ProfileComponent } from './auth';
import { LoaderComponent } from './component/loader/loader.component';
import { ItemComponent } from './component/item/item.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Translate Step 1  -->
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Translate Step 2  -->
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent, 
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    ProfileComponent,
    LoaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
