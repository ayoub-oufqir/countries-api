const SearchBox = (props) => {
  return (
    <div className="text-center py-14">
      {/* <p className="mb-4 text-xl font-semibold">{searchInput}</p> */}
      <div className="mx-auto  flex justify-center items-center">
        <input
          type="text"
          placeholder="Search Countries by name, city and Languages"
          name="searchBox"
          id="searchBox"
          className="p-4 w-1/2 rounded-full border-none focus-visible:border-none text-2xl"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
