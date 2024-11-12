import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaVeterinarioComponent } from './componentes/alta-veterinario/alta-veterinario.component';
import { Veterinario } from './clases/Veterinario';
import { VeterinariosComponent } from './componentes/veterinarios/veterinarios.component';
import { AnimalesComponent } from './componentes/animales/animales.component';
import { crudAnimalesGuard } from './guards/crud-animales.guard';

export const routes: Routes = [
    { 
        path: '',loadComponent: () => import('./componentes/bienvenida/bienvenida.component')
        .then(c => c.BienvenidaComponent), pathMatch: "full"
    },
    {
        path: 'Bienvenida', loadComponent: () => import('./componentes/bienvenida/bienvenida.component')
          .then(c => c.BienvenidaComponent)
    },
    { 
        path: 'Login', loadComponent: () =>import('./componentes/login/login.component')
        .then(c=>c.LoginComponent)
    },
    {
        path: 'AltaVeterinario', loadComponent: () => import('./componentes/alta-veterinario/alta-veterinario.component')
          .then(c => c.AltaVeterinarioComponent)
    },
    {
        path: 'Veterinarios', loadComponent: () => import('./componentes/veterinarios/veterinarios.component')
          .then(c => c.VeterinariosComponent)
    },
    {
        path: 'Animales', loadComponent: () => import('./componentes//animales/animales.component')
          .then(c => c.AnimalesComponent)
    },
];
