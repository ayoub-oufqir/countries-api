const CountryCard = ({ country }) => {
  return (
    <div className="bg-white w-3/4 p-2 rounded mx-auto text-center py-4 drop-shadow-lg hover:scale-105 duration-500 flex justify-center">
      <div>
        <img
          src={country.flag}
          alt="Country Flag"
          width={200}
          className="mx-auto drop-shadow-lg mb-4"
        />
        <p className="font-bold text-orange-400 mb-2 text-xl">{country.name}</p>
        <div className="text-left p-4 text-xl">
          <p>
            <span className="font-bold">Capital:</span> {country.capital}
          </p>
          <p>
            <span className="font-bold">Language:</span>{" "}
            {country.languages[0].name}
          </p>
          <p>
            <span className="font-bold">Population:</span> {country.population}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
