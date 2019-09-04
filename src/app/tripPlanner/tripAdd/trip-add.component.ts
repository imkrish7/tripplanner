import { Component, Output, EventEmitter } from '@angular/core';

import { DataServices } from '../../core/data.service';

import { add } from './add';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
    selector: 'app-add-form',
    templateUrl: './trip-add.component.html',
    styleUrls: ['./trip-add.component.sass']
})

export class AddTripComponent {

    from = ' ';
    to = ' ';
    startDate: string ;
    endDate: string ;
    submitted = false;

    // trip: any[] = [];

    @Output() addData = new EventEmitter();
    @Output() addForm = new EventEmitter();

    constructor(private dataService: DataServices) {
        
    }

    model = new add(this.from, this.to, this.startDate, this.endDate);

    onSubmit() {
        this.submitted = true;
    }

   newAdd() {
       if (this.model.from !== ' ' && this.model.to !== ' ' && this.model.startDate !== '' && this.model.endDate !== '' )
        {
           const data = {
               from: this.model.from.trim(),
               to: this.model.to.trim(),
               startDate: this.model.startDate,
               endDate: this.model.endDate
           };

           this.addData.emit(data); 
        }
       this.addForm.emit();
   }
}