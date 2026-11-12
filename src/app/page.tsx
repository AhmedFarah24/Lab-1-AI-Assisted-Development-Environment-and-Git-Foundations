
"use client";

import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import SponsorBanner from "../components/SponsorBanner";
import SearchFilters from "../components/SearchFilters";
import type { Property, Sponsor } from "../types";

const properties: Property[] = [
  {
    id: "home-1",
    address: "100 Example Street",
    city: "Los Angeles, CA",
    price: 650000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
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
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Modern house with large windows and landscaping",
  },
  {
    id: "home-3",
    address: "300 Demo Boulevard",
    city: "Long Beach, CA",
    price: 850000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 1900,
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Contemporary residential interior",
  },
];

const sponsor: Sponsor = {
  id: "sponsor-1",
  name: "Example Home Services",
  website: "https://example.com",
};

export default function Home() {
  const [minBedrooms, setMinBedrooms] = useState(0);

  const filteredProperties = properties.filter(
    (property) => property.bedrooms >= minBedrooms
  );

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10 text-gray-900">
      <div className="mx-auto max-w-6xl space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Neighborhood Listing Platform
          </h1>
          <p className="text-lg text-gray-600">
            Browse sample homes in your neighborhood.
          </p>
        </header>

        <section aria-label="Property search">
          <SearchFilters onSearch={setMinBedrooms} />
        </section>

        <section aria-labelledby="properties-heading">
          <h2
            id="properties-heading"
            className="mb-3 text-2xl font-bold"
          >
            Available Properties
          </h2>

          <p role="status" className="mb-6 text-gray-600">
            {filteredProperties.length} properties found
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        </section>

        <SponsorBanner sponsor={sponsor} />
      </div>
    </main>
  );
}
