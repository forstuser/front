export interface UserList {
       ID: number;
       Name: string;
       EmailID: string;
       Status: string;
   }

   export interface User {
       statusCode: number;
       UserList: UserList[];
   }
