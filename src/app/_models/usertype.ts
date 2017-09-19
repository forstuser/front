 export interface UserTypeList {
       TypeID: number;
       Name: string;
   }

   export interface UserType {
       statusCode: number;
       UserTypeList: UserTypeList[];
   }
