export interface Sponsor {
  id: string;
  name: string;
  website: string;
}

export interface Property {
  id: string;
  address: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  imageAlt: string;
}