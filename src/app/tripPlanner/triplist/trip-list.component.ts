import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-trip-list',
    templateUrl: './trip-list.component.html',
    styleUrls: ['./trip-list.component.sass']
})

export class TripListComponent implements OnInit{

    private _journeyList: any[] = [];

    @Input() get journeyList(): any[] {
        return this._journeyList;
    }

    set journeyList( value: any[]) {
        if (value) {
            this.journeys = this._journeyList = value;
        }
    }

    @Output() deleteData = new EventEmitter();
    @Output() editData = new EventEmitter();
    journeys: any[] = [];

    editForm(i) {
    
        this.editData.emit(i);
    }
ngOnInit(): void {

    
}

delete(i){
    console.log(i);
    this.deleteData.emit(i);
}

}
