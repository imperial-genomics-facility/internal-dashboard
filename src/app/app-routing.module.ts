import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SamplePoolingComponent } from  './components/sample-pooling/sample-pooling.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'samplepool',     component: SamplePoolingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }