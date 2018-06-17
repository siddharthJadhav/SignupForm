import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './componets/signup/signup.component';
import { HomeComponent } from './componets/home/home.component';

const route: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '**', component: SignupComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(route)
  ],
  declarations: []
})
export class AppRoutingModule { }
