import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { LocationService } from '../../services/location.service';
// Import Models
import { Location } from '../../domain/roomenta_db/location';

// START - USED SERVICES
/**
* locationService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* locationService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Location
 * @class LocationListComponent
 */
@Component({
    selector: 'app-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private locationService: LocationService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.locationService.list();
    }

    /**
     * Select Location to remove
     *
     * @param {string} id Id of the Location to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Location
     */
    deleteItem() {
        this.locationService.remove(this.idSelected);
    }

}
