import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ParksComponent } from './pages/parks/parks.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parks', component: ParksComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
