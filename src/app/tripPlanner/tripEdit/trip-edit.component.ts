import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

// import { DataServices } from '../../core/data.service';

import { add } from '../tripAdd/add';

@Component({
    selector: 'app-edit-form',
    templateUrl: './trip-edit.component.html',
    styleUrls: ['./trip-edit.component.sass']
})

export class EditTripComponent {
 
    private _editIndex;
    // private  editrip;


    @Input() get editIndex() {
        return this._editIndex;
    }

    set editIndex(value: any) {
        if(value){
            this._editIndex = value;
        }
    }

    @Input() editrip: add;
    @Output() showEditForm = new EventEmitter();
    submitted = false;

    constructor() { 
        // console.log(this.journeys)
    }

    onSubmit() {
        this.submitted = true;
    }

    editForm(){
        console.log(this.editrip);
        this.showEditForm.emit();
    }

}