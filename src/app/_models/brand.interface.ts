export interface Brand {
    Name: String;
    Description: String;
    items: Item[];
}

export interface Item {
    DetailTypeID: Number;
    DisplayName: String;
    Details: String;
}
