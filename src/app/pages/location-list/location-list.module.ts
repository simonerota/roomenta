import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list.component';
import { LocationListRoutingModule } from './location-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LocationListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LocationListComponent
  ]
})
export class LocationListModule { }
