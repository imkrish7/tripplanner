import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';





@Injectable()
export class DataServices {

    baseUrl = '../../assets/';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    trip = [];
    constructor( private http: HttpClient) { }

    getTripList(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl + 'trips.json')
                    .pipe(
                        map((trips)=> this.trip = trips),
                        catchError(this.handleError)
                    );
    }

    addTrip(trip: any): Observable<any[]> {
            return this.http.post<any>(this.baseUrl, trip, this.httpOptions);
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }
}