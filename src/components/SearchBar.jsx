function SearchBar({
  search,
  setSearch,
  type,
  setType,
  bedrooms,
  setBedrooms,
}) {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search by location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="All">Buy + Rent</option>
        <option value="Buy">Buy</option>
        <option value="Rent">Rent</option>
      </select>

      <select
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
      >
        <option value="All">Any Bedrooms</option>
        <option value="1">1+ Bedroom</option>
        <option value="2">2+ Bedrooms</option>
        <option value="3">3+ Bedrooms</option>
        <option value="4">4+ Bedrooms</option>
      </select>

    </div>
  );
}

export default SearchBar;