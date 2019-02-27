import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationEditComponent } from './location-edit.component';
import { LocationEditRoutingModule } from './location-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LocationEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LocationEditComponent
  ]
})
export class LocationEditModule { }
