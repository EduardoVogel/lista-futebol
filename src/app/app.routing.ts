
import{Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ListaComponent } from './lista/lista.component';
import { CompetitionComponent } from './competition/competition.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
    {path:'lista/:id', component: ListaComponent},
    {path:'home', component: HomeComponent},
    {path:'competition/:id', component: CompetitionComponent}
];
export const MyRoutes: Routes = [
    {path:'lista/:id', component: ListaComponent},
    { path: 'competiton/:id', component: CompetitionComponent }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);