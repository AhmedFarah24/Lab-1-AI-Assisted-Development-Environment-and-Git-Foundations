"use client";

import { useState, type FormEvent } from "react";

interface Property {
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

interface Sponsor {
  id: string;
  name: string;
  website: string;
}

const properties: Property[] = [
  {
    id: "home-1",
    address: "100 Example Street",
    city: "Los Angeles, CA",
    price: 650000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    imageAlt: "Modern house with a landscaped front yard",
  },
  {
    id: "home-2",
    address: "200 Sample Avenue",
    city: "Torrance, CA",
    price: 750000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    imageAlt: "Modern residential house with large windows",
  },
  {
    id: "home-3",
    address: "300 Demo Boulevard",
    city: "Long Beach, CA",
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1900,
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    imageAlt: "Contemporary residential home interior",
  },
];