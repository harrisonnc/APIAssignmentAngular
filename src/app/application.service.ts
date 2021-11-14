import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Application } from "./application";


@Injectable({
    providedIn: 'root'
})

export class ApplicationService{

    private apiUrl = environment.applicationUrl;

    constructor (private httpClient: HttpClient){}
    
    public getApplications(): Observable<Application[]> {
        return this.httpClient.get<Application[]>(this.apiUrl);
    }
}