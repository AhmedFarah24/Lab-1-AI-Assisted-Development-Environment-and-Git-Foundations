
import type { Property } from "../types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={property.imageUrl}
        alt={property.imageAlt}
        loading="lazy"
        className="aspect-video w-full bg-gray-100 object-cover"
      />

      <div className="space-y-3 p-5">
        <h3 className="text-xl font-bold">
          {property.address}
        </h3>

        <p className="text-gray-600">
          {property.city}
        </p>

        <p className="text-2xl font-bold text-blue-800">
          ${property.price.toLocaleString()}
        </p>

        <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
          <li>{property.bedrooms} beds</li>
          <li>{property.bathrooms} baths</li>
          <li>{property.squareFeet.toLocaleString()} sq ft</li>
        </ul>

        <details className="pt-2">
          <summary className="cursor-pointer rounded font-semibold text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
            View details for {property.address}
          </summary>

          <p className="mt-2 text-sm text-gray-700">
            Sample property located in {property.city}.
          </p>
        </details>
      </div>
    </article>
  );
}
