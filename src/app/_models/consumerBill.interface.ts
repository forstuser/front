export interface ImageList {
       Image: string;
   }

   export interface Detail {
       DetailID: number;
       Name: string;
       EmailID: string;
       PhoneNo: string;
       Invoice: string;
       TotalAmount: number;
       Tex: number;
       PurchaseDate: Date;
   }

   export interface ConsumerBill {
       statusCode: number;
       BillID: number;
       BillNo: string;
       UserID:string; // ask amit bhaiyawhy it's not in db
       Name: string;
       EmailID: string;
       PhoneNo: string;
       ImageList: ImageList[];
       Detail: Detail[];
   }