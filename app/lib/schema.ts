// lib/schema.ts

export interface References {
  id: number;
  sortId: number; 
  companyName: string;
  companyMessage: string;
  logo?: string; // Optional field for logo URL
  img: string; 
}

export interface Schema {
  references: References[];
}