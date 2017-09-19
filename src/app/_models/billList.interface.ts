 export interface NewBillList {
       BID: number;
       BillNo: string;
       Name: string;
       EmailID?: any;
       PhoneNo: string;
       BillDate: Date;
   }

   export interface NewList {
       statusCode: number;
       BillList: NewBillList[];
   }

export interface BillList {
       BID: number;
       UID: number;
       BillNo: string;
       Name: string;
       EmailID?: any;
       PhoneNo: string;
       BillDate: Date;
       CE_Name: string;
       CE_EmailID: string;
       CE_TaskDate: Date;
       CE_Status: string;
       CE_StatusID: number;
       QE_Name?: any;
       QE_EmailID: string;
       QE_TaskDate: Date;
       QE_Status?: any;
       QE_StatusID?: any;
   }

export interface Bill {
    statusCode: number;
    BillList: BillList[];
}
