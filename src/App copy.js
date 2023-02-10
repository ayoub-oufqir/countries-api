import "./App.css";
import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import CountryCard from "./components/CountryCard.js";
import NavBar from "./components/NavBar.js";
import SearchBox from "./components/SearchBox.js";

function App() {
  const [countries, setCountries] = useState([]);
  const [url, setUrl] = useState("");
  
  let useMemoResult = useMemo(() => {
    axios
      .get(url)
      .then(function (response) {
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Donnnne");
      });
    return countries;
  }, [url]);

  useMemoResult = window.localStorage.getItem('useMemoResult');
  setTimeout(() => {
    // useMemoResult.map((item) => {
      //   console.log(item.name);
      // });
      console.log(useMemoResult);
  }, 2000);

  // useEffect(() => {
  //   window.localStorage.setItem('useMemoResult', useMemoResult);
  // }, [url]);

  return (
    <div className="bg-slate-200">
      <NavBar countriesArray={useMemoResult}/>
      <SearchBox countriesArray={useMemoResult}/>
      <div className="App grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
        {useMemoResult.map((element) => {
          return <CountryCard country={element}></CountryCard>;
        })}
      </div>
    </div>
  );
}

export default App;
