import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserDetailResolverService } from './user/user-detail-resolver.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  {
    path: 'user/:id', component: UserDetailsComponent,
    data: {
      myKey: 'myVal'
    },
    resolve: {
      user: UserDetailResolverService
    }
  },
  // sample whe to use data - here to return to a prev path.
  // { path: 'car', component: CarComponent },
  // { path: 'car/:id', component: ArticleDetails, data: { backPath: 'car'} },
  // { path: 'book', component: CarComponent },
  // { path: 'book/:id', component: ArticleDetails, data: { backPath: 'book'} },
  // { path: 'house', component: CarComponent },
  // { path: 'houses/:id', component: ArticleDetails, data: { backPath: 'book'} },
  { path: 'pipes', component: PipeSampleComponent },
  { path: '**', redirectTo: 'user' } // terminate path find - should be the last item!!
];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
