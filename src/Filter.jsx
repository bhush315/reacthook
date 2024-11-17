const Filter = ({ filter, onFilterChange }) => {
  const handleTitleChange = (e) => {
    onFilterChange({ ...filter, title: e.target.value });
  };

  const handleRatingChange = (e) => {
    onFilterChange({ ...filter, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filter.title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filter.rating}
        onChange={handleRatingChange}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
