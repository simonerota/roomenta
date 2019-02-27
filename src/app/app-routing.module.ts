// DEPENDENCIES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SECURITY
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    /* START MY VIEWS */

    { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
    { path: 'locations/:id', loadChildren: './pages/location-edit/location-edit.module#LocationEditModule' },
    { path: 'locations', loadChildren: './pages/location-list/location-list.module#LocationListModule' },
    { path: 'rooms/:id', loadChildren: './pages/room-edit/room-edit.module#RoomEditModule' },
    { path: 'rooms', loadChildren: './pages/room-list/room-list.module#RoomListModule' },

 /* END MY VIEWS */

    // SECURITY
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
