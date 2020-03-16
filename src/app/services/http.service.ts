import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
    providedIn : 'root',
})
export class HttpService {

    baseUrl : string = 'http://bookmetutor-backend.ap-southeast-1.elasticbeanstalk.com';

    constructor(private http : HttpClient) {}

    public get(url : string, header : Object, param? : Object ) : Observable<any> {

        const options = {
            headers : new HttpHeaders({
                    'Content-Type' : 'application/json'
                    }
                ),
            param : new HttpParams()
            }

        for(let key in header) {
            if(!header.hasOwnProperty(key)) continue;
            options.headers.append(key, header[key]);
        }

        for(let key in param) {
            if(!param.hasOwnProperty(key)) continue;
            options.headers.append(key, param[key]);
        }

        return this.http.get(this.baseUrl+url, options).pipe(
            retry(3)
        )
    }

    public post(url : string, header : Object, body : Object ) : Observable<any> {

        const options = {
            headers : new HttpHeaders({
                    'Content-Type' : 'application/json'
                    }
                )
            }

        for(let key in header) {
            if(!header.hasOwnProperty(key)) continue;
            options.headers.append(key, header[key]);
        }

        return this.http.post(this.baseUrl+url, body, options).pipe(
            retry(3)
        )
    }
}