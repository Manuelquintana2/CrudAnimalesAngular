import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaVeterinarioComponent } from './componentes/alta-veterinario/alta-veterinario.component';
import { Veterinario } from './clases/Veterinario';
import { VeterinariosComponent } from './componentes/veterinarios/veterinarios.component';
import { AnimalesComponent } from './componentes/animales/animales.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Bienvenida', pathMatch: "full" },
    { path: 'Bienvenida', component: BienvenidaComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'AltaVeterinario', component: AltaVeterinarioComponent},
    { path: 'Veterinarios', component: VeterinariosComponent },
    { path: 'Animales', component: AnimalesComponent },
];
