 export interface InclusionsList {
       ID: number;
       CatID: number;
       CatName: string;
       Name: string;
   }

   export interface Inclusion {
       statusCode: number;
       InclusionsList: InclusionsList[];
}
