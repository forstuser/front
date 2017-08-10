export interface OnlineSeller {
    Name: String;
    URL: String;
    GstinNo: String;
    items: Item[];
}

export interface Item {
    DetailTypeID: Number;
    DisplayName: String;
    Details: String;
}
