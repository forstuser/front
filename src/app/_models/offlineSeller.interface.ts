 export interface OfflineSellerList {
       ID: number;
       Name: string;
       OwnerName: string;
       GstinNo: string;
       PanNo: string;
       RegNo: string;
       ServiceProvider: number;
       Onboarded: number;
       HouseNo: string;
       Block: string;
       Street: string;
       Sector: string;
       City: string;
       State: string;
       PinCode: string;
       NearBy: string;
       Lattitude: string;
       Longitude: string;
   }

   export interface OfflineSeller {
       statusCode: number;
       OfflineSellerList: OfflineSellerList[];
   }
