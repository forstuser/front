export interface ExclusionsList {
       ID: number;
       CatID: number;
       CatName: string;
       Name: string;
   }

   export interface Exclusion {
       statusCode: number;
       ExclusionsList: ExclusionsList[];
   }
