import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {
    currentUser: any;
    TokenNo: String;
    UserType: Number;
    constructor(private http: Http) {
    // get login user credentials from localstorage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.TokenNo = this.currentUser.token;
    this.UserType = this.currentUser.UserType;
}
    // get different type of user
    getAllUser() {
        const body = { TokenNo : this.TokenNo, UserType: this.UserType };
        const data = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post('http://localhost:3000/Services/UserTypeList', data, options).map((response: Response) => response.json());
    }
    // get list of admin,qe,ce and customer
    getUserList(UserType: String) {
        const body = { TokenNo : this.TokenNo, UserType: UserType };
        const data = JSON.stringify(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // console.log(data);
        return this.http.post('http://localhost:3000/Services/ManagementUserList', data, options)
        .map((response: Response) => response.json());
    }
//     getById(id: number) {
//         return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
//     }

    createUser(user: User) {
        user['TokenNo'] = this.TokenNo;
        const data = JSON.stringify(user);
        console.log(data);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:3000/Services/AddManagementUser', data, options )
                .map((response: Response) => response.json());
    }

//     update(user: User) {
//         return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
//     }

//     delete(id: number) {
//         return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
//     }
}
