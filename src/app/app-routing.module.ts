import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { GenComponent } from './gen/gen.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:GenComponent},
  {path:"admin", component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
