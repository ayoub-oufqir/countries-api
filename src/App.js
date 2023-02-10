import "./App.css";
import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import CountryCard from "./components/CountryCard.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
// import SearchBox from "./components/SearchBox.js";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesCopy, setCountriesCopy] = useState([]);
  const [url, setUrl] = useState("https://restcountries.com/v2/all");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then(function (response) {
          setCountries(response.data);
          setCountriesCopy(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log("Donnnne");
        });
    }, 0);
  }, [url]);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // countries = window.localStorage.getItem('countries');
  // setTimeout(() => {
  //   console.log(countries);
  // }, 2000);

  // useEffect(() => {
  //   window.localStorage.setItem('countries', countries);
  // }, [url]);

  // start search box code
  const [searchInput, setSearchInput] = useState("");
  const handleBlur = () => {
    if (searchInput.length === 0) {
      setCountriesCopy(countries);
    } else {
      let newCountries = countries.filter((item) => {
        return (
          item.name.includes(capitalizeFirstLetter(searchInput)) ||
          item.languages[0].name.includes(capitalizeFirstLetter(searchInput))
        );
      });
      setCountriesCopy(newCountries);
    }

    // setCountries(newCountries);
    console.log(countries);
  };
  // end search box code
  return (
    <div className="bg-slate-200 h-full">
      <NavBar countriesArray={countriesCopy} />
      {/* <SearchBox countriesArray={countries} setCountries={setCountries} /> */}
      {/* start new search box  */}
      <div className="text-center py-14">
        <p className="mb-4 text-xl font-semibold">{searchInput}</p>
        <div className="mx-auto  flex justify-center items-center">
          <input
            type="text"
            placeholder="Search Countries by name, city and Languages"
            name="searchBox"
            id="searchBox"
            className="p-4 w-1/2 rounded-full border-none focus-visible:border-none text-2xl"
            onChange={(e) => setSearchInput(e.target.value)}
            onBlur={handleBlur}
          />
        </div>
      </div>
      {/* end new search box  */}

      {countriesCopy.length > 0 ? (
        <div className="App grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto pb-20">
          {countriesCopy.map((element) => {
            return (
              <CountryCard country={element} key={element.name}></CountryCard>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center text-4xl text-slate-700 pt-20 pb-40">
          {countries.length === 0
            ? "Loading Data :)"
            : countriesCopy.length === 0
            ? "No data matched your search :/"
            : ""}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
