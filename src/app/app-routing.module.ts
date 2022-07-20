import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './features/home/pages/details/details.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { SingupComponent } from './features/singup/pages/singup/singup.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'students-list', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'students-details/:studentId', component: DetailsComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'cadastro', component:SingupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
