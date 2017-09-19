 export interface CategoryList {
       ID: number;
       Name: string;
       RefID: number;
       Level: number;
   }

   export interface Category {
       statusCode: number;
       CategoryList: CategoryList[];
   }
