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

    { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: 'locations/:id', loadChildren: './pages/location-edit/location-edit.module#LocationEditModule', canActivate: [AuthGuard] },
    { path: 'locations', loadChildren: './pages/location-list/location-list.module#LocationListModule', canActivate: [AuthGuard] },
    { path: 'rooms/:id', loadChildren: './pages/room-edit/room-edit.module#RoomEditModule', canActivate: [AuthGuard] },
    { path: 'rooms', loadChildren: './pages/room-list/room-list.module#RoomListModule', canActivate: [AuthGuard] },

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
