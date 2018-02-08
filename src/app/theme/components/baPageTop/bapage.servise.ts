import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
class ItemType {
    success: boolean;
    ItemArray: string[];
}

@Injectable()
export class BagPagetopService {

    constructor(private http: Http, private router: Router) { }

    private web_api_get_All_Item = 'http://localhost:3000/reportItem/getAllItem';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    getAllItem() {
        console.log('in the bag service');

        return this.http.get(this.web_api_get_All_Item, { headers: this.headers })
            .toPromise()
            .then(response => {
                console.log(response.json());
                return response.json() as ItemType;


            }).catch(err => {
                console.log('err get items');
                return err;


            });

    }



}
