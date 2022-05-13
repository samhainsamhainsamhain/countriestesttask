import { Country } from "../../countries/countriesInterfaces";
import FavoritesButton from "../favorites/favoritesButton/FavoritesButton";

import classes from "./SearchResults.module.css";

interface SearchResultsProps {
  results: Country[];
  resultClickHandler: (country: Country) => void;
  handleFavorites: (countryName: string) => void;
  favorites: string[];
}

export default function SearchResults(props: SearchResultsProps) {
  function onResultClick(result: Country) {
    props.resultClickHandler(result);
  }

  return (
    <ul className={classes.searchResults}>
      {props.results !== null &&
        props.results.map((result) => {
          return (
            <li key={Math.random()} className={classes.searchItem}>
              <div
                className={classes.searchItemContent}
                onClick={() => onResultClick(result)}
              >
                <img src={result.flags.svg} className={classes.flag} />
                <h4 className={classes.officialName}>{result.name.official}</h4>
              </div>
              <FavoritesButton
                handleFavorites={props.handleFavorites}
                favorites={props.favorites}
                countryName={result.name.common}
              />
            </li>
          );
        })}
    </ul>
  );
}
