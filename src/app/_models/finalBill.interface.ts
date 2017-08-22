export interface ProductForm {
    CatFormID: string;
    value: string;
}

export interface InsuranceList {
    Plan: string;
    PolicyNo: string;
    AmountInsured: string;
    PremiumType: string;
    PremiumAmount: string;
    PolicyEffectiveDate: string;
    PolicyExpiryDate: string;
    BrandID?: any;
    SellerInfo: number;
    Inclusions: number[];
    Exclusions: number[];
    InsuranceImage: number[];
}

export interface WarrantyList {
    WarrantyType: string;
    PolicyNo: string;
    PremiumType: string;
    PremiumAmount: string;
    PolicyEffectiveDate: string;
    PolicyExpiryDate: string;
    BrandID: number;
    SellerInfo?: any;
    Inclusions: number[];
    Exclusions: number[];
    WarrantyImage: number[];
}

export interface AMCList {
    PolicyNo: string;
    PremiumType: string;
    PremiumAmount: string;
    PolicyEffectiveDate: string;
    PolicyExpiryDate: string;
    BrandID?: any;
    SellerInfo: number;
    Inclusions: number[];
    Exclusions: number[];
    AMCImage: number[];
}

export interface RepairList {
    RepairValue: string;
    Taxes: string;
    RepairInvoiceNumber: string;
    RepairDate: string;
    BrandID?: any;
    SellerInfo: number;
    RepairImage: number[];
}

export interface ProductList {
    ProductName: string;
    Value: string;
    Taxes: string;
    Tag: string;
    BrandID: string;
    ColorID: string;
    MasterCatID: string;
    CatID: string;
    ProductForm: ProductForm[];
    InsuranceList: InsuranceList[];
    WarrantyList: WarrantyList[];
    AMCList: AMCList[];
    RepairList: RepairList[];
}

export interface FinalBill {
    TokenNo: string;
    BillID: number;
    UserID: number;
    InvoiceNo: string;
    Name: string;
    EmailID: string;
    PhoneNo: string;
    DocID: number;
    TotalValue: string;
    Taxes: string;
    DateofPurchase: string;
    BillImage: number[];
    OnlineSellerID: string;
    SellerList: number[];
    ProductList: ProductList[];
}