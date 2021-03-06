import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Base } from './base';

export * from './interface';
export * from './define';

@Injectable()
export class Meta extends Base {
    constructor( http: Http ) {
        super( http, 'meta' );
    }
}


