import { Routes } from '@angular/router';
import { authGuard } from './main/shared/guards/auth-guard';
import { Main } from './main/main';
import { Home } from './main/features/pages/home/home';

export const routes: Routes = [
    {
        path : '',
        canActivate : [authGuard],
        component : Main,
        children : [
            {
                path : "",
                component : Home
            }
        ]
    }
];
