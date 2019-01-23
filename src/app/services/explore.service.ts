import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ExploreService {

    apiUrl = environment.apiUrl;

    constructor(public http: HttpClient) {
    }

    dir(path: string): Promise<any[]> {
        return this.http.get<any[]>(this.apiUrl + '/dir', {
            params: {
                path: path
            }
        }).toPromise();
    }
}
