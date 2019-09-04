import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannerComponent } from './trip-planner.component';
import { AddTripComponent } from './tripAdd/trip-add.component';
import { TripListComponent } from './triplist/trip-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EditTripComponent } from './tripEdit/trip-edit.component'


@NgModule({
    declarations: [ PlannerComponent, TripListComponent, AddTripComponent, EditTripComponent ],
    imports: [ CommonModule, SharedModule, FormsModule ],
    exports: [ PlannerComponent ],
    providers: [],
})
export class PlannerModule {}