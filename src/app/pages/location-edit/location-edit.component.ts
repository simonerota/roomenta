// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { LocationService } from '../../services/location.service';

import { Location } from '../../domain/roomenta_db/location';
import { Room } from '../../domain/roomenta_db/room';

// START - USED SERVICES
/**
* locationService.create
*	@description CRUD ACTION create
*
* locationService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* locationService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Location
 */
@Component({
    selector: 'app-location-edit',
    templateUrl: 'location-edit.component.html',
    styleUrls: ['location-edit.component.css']
})
export class LocationEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Location>;
    isNew: Boolean = true;
    formValid: Boolean;

    listLocation: Location[];

    externalRoom: Room[];

    constructor(
        private locationService: LocationService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalRoom = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.locationService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.roomService.findByLocation(id).subscribe(list => this.externalRoom = list);
            }
            // Get relations
        });
    }



    /**
     * Save Location
     *
     * @param {boolean} formValid Form validity check
     * @param Location item Location to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.locationService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.locationService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
