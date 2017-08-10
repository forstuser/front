export interface Brand {
    Name: String;
    Description: String;
    Details: Detail[];
}

export interface Detail {
    DetailTypeID: Number;
    DisplayName: String;
    Details: String;
}
