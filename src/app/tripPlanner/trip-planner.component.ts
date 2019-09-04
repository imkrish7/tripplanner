import { Component, OnInit } from '@angular/core';
import { DataServices } from '../core/data.service';

@Component({
    selector: 'app-planner',
    templateUrl: './trip-planner.component.html',
    styleUrls: ['./trip-planner.component.sass']
})

export class PlannerComponent implements OnInit {
    journeys: any[] = [];

    addForm = false;
    editForm = false;
    editIndex= 0;
    editrip = {};
    constructor(private dataservices: DataServices) {}

    ngOnInit(): void {
        this.dataservices.getTripList()
            .subscribe((trips: any[]) => this.journeys = trips);
    }
    showAddForm(){
        this.addForm = !this.addForm;
    }

    showEdit(i) {
        this.editForm = !this.editForm;
        this.editIndex = i;
        this.editrip = this.journeys[i];
    }
    showEditForm(){
        this.editForm = !this.editForm;
    }
    addTrip(trip: any){
        this.journeys.push(trip);
    }
    deleteTrip(i) {
        this.journeys = this.journeys.filter((trip,index ) => i != index );
    }

}

