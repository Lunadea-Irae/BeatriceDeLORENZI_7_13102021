import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<Users | null>;
    public currentUser: Observable<Users | null>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Users | null>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Users | null {
        return this.currentUserSubject.value;
    }

    login(email: string | undefined, username: string | undefined, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, username, password })
            .pipe(map(authData => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(authData));
                this.currentUserSubject.next(authData);
                return authData;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}