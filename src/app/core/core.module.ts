import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { DataServices } from './data.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ DataServices ]
})

export class CoreModule{}