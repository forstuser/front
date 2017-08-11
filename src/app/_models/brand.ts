 export interface BrandList {
       ID: number;
       Name: string;
       Description: string;
   }

   export interface Brand {
       statusCode: number;
       BrandList: BrandList[];
   }
