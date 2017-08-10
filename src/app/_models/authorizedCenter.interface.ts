export interface AuthorizedCenter {
    BrandID: Number;
    Name: String;
    HouseNo: String;
    Block: String;
    Street: String;
    Sector: String;
    City: String;
    State: String;
    PinCode: String;
    NearBy: String;
    Lattitude: String;
    Longitude: String;
    OpenDays: String;
    Timings: String;
    Details: Detail[];
}

export interface Detail {
    DetailTypeID: Number;
    DisplayName: String;
    Details: String;
}
