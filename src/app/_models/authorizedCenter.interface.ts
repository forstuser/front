// export interface AuthorizedCenter {
//     BrandID: Number;
//     Name: String;
//     HouseNo: String;
//     Block: String;
//     Street: String;
//     Sector: String;
//     City: String;
//     State: String;
//     PinCode: String;
//     NearBy: String;
//     Lattitude: String;
//     Longitude: String;
//     OpenDays: String;
//     Timings: String;
//     Details: Detail[];
// }

// export interface Detail {
//     DetailTypeID: Number;
//     DisplayName: String;
//     Details: String;
// }
export interface AuthorizedList {
       ID: number;
       BrandID: number;
       BrandName: string;
       Name: string;
       HouseNo: string;
       Block: string;
       Street: string;
       Sector: string;
       City: string;
       State: string;
       PinCode: number;
       NearBy: string;
       Lattitude: string;
       Longitude: string;
       OpenDays: string;
       Timings: string;
   }

   export interface AuthorizedCenter {
       statusCode: number;
       AuthorizedList: AuthorizedList[];
   }
