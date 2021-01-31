import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
// import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import { AuthGuard } from './guards/auth.guard';
import { SignInComponent } from './home/signin/signin.component';

export const routes: Routes = [

  {
    path: '', component: SignInComponent,
    data: {
      title: 'Login Page'
    }
  },

  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full'
  // },

  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard]
  // },  

  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },

  {
    path: 'default',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    // children: [
    //   {
    //     path: 'base',
    //     loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
    //   },
    //   {
    //     path: 'buttons',
    //     loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
    //   },
    //   {
    //     path: 'charts',
    //     loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
    //   },
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
    //   },
    //   {
    //     path: 'icons',
    //     loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    //   },
    //   {
    //     path: 'notifications',
    //     loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
    //   },
    //   {
    //     path: 'theme',
    //     loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
    //   },
    //   {
    //     path: 'widgets',
    //     loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
    //   }
    // ]
  }
  ,

  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot
    (routes,
    //{ relativeLinkResolution: 'legacy' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
