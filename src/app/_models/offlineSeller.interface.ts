export interface OfflineSeller {
    Name: String;
    OwnerName: String;
    GstinNo: String;
    PanNo: String;
    RegNo: String;
    ServiceProvider: String;
    Onboarded: String;
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
    Details: Detail[];
}

export interface Detail {
    DetailTypeID: Number;
    DisplayName: String;
    Details: String;
}
