import { ProvaFormComponent } from './prova-form/prova-form.component';
import { HomeComponent } from './home/home.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';


const AppRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'nova-prova', component: ProvaFormComponent },
      ]



@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
