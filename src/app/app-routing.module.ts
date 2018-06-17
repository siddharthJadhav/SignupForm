import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './componets/signup/signup.component';
import { HomeComponent } from './componets/home/home.component';

const route: Routes = [
  {path: '**', component: SignupComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(route)
  ],
  declarations: []
})
export class AppRoutingModule { }
