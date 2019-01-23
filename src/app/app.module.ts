import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotFoundComponent} from './page/not-found/not-found.component';
import {LoginComponent} from './page/login/login.component';
import {ExploreComponent} from './page/explore/explore.component';
import {ExploreService} from './services/explore.service';
import { ExploreTableComponent } from './explore/explore-table/explore-table.component';
import {HttpClientModule} from '@angular/common/http';
import { ExploreBreadcrumbsComponent } from './explore/explore-breadcrumbs/explore-breadcrumbs.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        LoginComponent,
        ExploreComponent,
        ExploreTableComponent,
        ExploreBreadcrumbsComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ExploreService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
