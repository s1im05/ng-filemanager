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

    dir(path: string): Promise<IFileListResponse> {
        return this.http.get<IFileListResponse>(this.apiUrl + '/dir', {
            params: {
                path: path
            }
        }).toPromise();
    }
}
