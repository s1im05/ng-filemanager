import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './page/not-found/not-found.component';
import {ExploreComponent} from './page/explore/explore.component';
import {LoginComponent} from './page/login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'explore', pathMatch: 'full'},
    {path: '404', component: NotFoundComponent},

    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LoginComponent},

    {path: 'explore', component: ExploreComponent},

    {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
