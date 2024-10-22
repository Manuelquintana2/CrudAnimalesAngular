import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaVeterinarioComponent } from './componentes/alta-veterinario/alta-veterinario.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Bienvenida', pathMatch: "full" },
    { path: 'Bienvenida', component: BienvenidaComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'AltaVeterinario', component: AltaVeterinarioComponent},
    // { path: 'Choferes', component: ChoferesComponent },
    // { path: 'Vehiculos', component: VehiculosComponent },
];
