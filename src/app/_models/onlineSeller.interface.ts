export interface SellerList {
       ID: number;
       Name: string;
       URL: string;
       GstinNo: string;
   }

   export interface OnlineSeller {
       statusCode: number;
       SellerList: SellerList[];
   }
