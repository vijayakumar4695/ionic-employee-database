import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import { DataService } from './data.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [DataService],
})
export class AppRoutingModule { }
