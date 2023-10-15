import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

import {userGuard} from "./core/guards/user.guard";

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path:"login",
    // data: {preload: true},
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'dashboard',
    // data: {preload: true},
    canActivate: [userGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path:"**",
    redirectTo: "/login"
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {preloadingStrategy: PreloadModulesStrategy}
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
