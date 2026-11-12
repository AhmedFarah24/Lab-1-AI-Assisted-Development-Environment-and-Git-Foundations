import type { FormEvent } from "react";

interface SearchFiltersProps {
  onSearch: (bedrooms: number) => void;
}

export default function SearchFilters({
  onSearch,
}: SearchFiltersProps) {
  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const bedrooms = Number(data.get("bedrooms"));

    onSearch(bedrooms);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-end gap-4 rounded-xl border bg-white p-5 text-gray-900"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="bedrooms">
          Minimum Bedrooms
        </label>

        <select
          id="bedrooms"
          name="bedrooms"
          className="rounded border p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
        >
          <option value="0">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
        </select>
      </div>

      <button
        type="submit"
        className="rounded bg-blue-700 px-5 py-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        Search Properties
      </button>
    </form>
  );
}