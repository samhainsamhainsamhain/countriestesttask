import { useState } from "react";

import SearchBox from "./components/searchBox/SearchBox";
import SearchResults from "./components/searchResults/SearchResults";
import CountryCard from "./components/countryCard/CountryCard";
import { Country } from "./countries/countriesInterfaces";
import { countriesFetch } from "./countries/countriesFetch";

import classes from "./App.module.css";
import FavoritesList from "./components/favorites/favoritesList/FavoritesList";

function App() {
  const [showedCountry, setShowedCountry] = useState<Country | null>(null);
  const [searchResult, setSearchResult] = useState<Country[] | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  function getSearchResult(queryResult: Country[]) {
    clearState();
    if (queryResult.length === 1) {
      return setShowedCountry(queryResult[0]);
    }
    setSearchResult(queryResult);
  }

  function showCountry(country: Country) {
    if (country === showedCountry) return;
    setShowedCountry(country);
  }

  async function showBorderCountry(border: string) {
    clearState();
    const queryResult = (await countriesFetch(`alpha/${border}`)) as Country[];
    console.log(queryResult);
    return setShowedCountry(queryResult[0]);
  }

  function clearState() {
    setShowedCountry(null);
    setSearchResult(null);
  }

  function handleFavorites(newFavorite: string) {
    if (favorites.includes(newFavorite)) {
      setFavorites((prevState) =>
        prevState.filter((favoriteItem) => favoriteItem !== newFavorite)
      );
    } else {
      setFavorites((prevState) => {
        return [...prevState, newFavorite];
      });
    }
  }

  const showedCountryComponent = (
    <>
      {showedCountry !== null && (
        <CountryCard
          countryProperties={showedCountry}
          showBorderCountry={showBorderCountry}
          handleFavorites={handleFavorites}
          favorites={favorites}
        />
      )}
    </>
  );

  const searchResultsComponent = (
    <>
      {searchResult !== null && (
        <SearchResults
          results={searchResult}
          resultClickHandler={showCountry}
          handleFavorites={handleFavorites}
          favorites={favorites}
        />
      )}
    </>
  );

  const favoritesListComponent = (
    <>
      {favorites && (
        <FavoritesList
          handleFavorites={handleFavorites}
          favorites={favorites}
        />
      )}
    </>
  );

  return (
    <div className={classes.App}>
      <SearchBox onSearchResultReceived={getSearchResult} />
      {favoritesListComponent}
      {showedCountryComponent}
      {searchResultsComponent}
    </div>
  );
}

export default App;
