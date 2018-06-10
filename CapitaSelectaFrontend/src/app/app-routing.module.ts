import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {ServiceEenComponent} from './service-een/service-een.component';
import {ServiceTweeComponent} from './service-twee/service-twee.component';
import {ServiceDrieComponent} from './service-drie/service-drie.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'Onderwerpen', component: ServiceEenComponent},
  { path: 'Artikelen', component: ServiceTweeComponent},
  { path: 'Aanbevelingen', component: ServiceDrieComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
