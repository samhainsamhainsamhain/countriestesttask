import { Country } from "../../countries/countriesInterfaces";
import FavoritesButton from "../favorites/favoritesButton/FavoritesButton";

import classes from "./CountryCard.module.css";

interface CountryProps {
  countryProperties: Country;
  showBorderCountry: (border: string) => void;
  handleFavorites: (countryName: string) => void;
  favorites: string[];
}

export default function CountryCard(props: CountryProps) {
  return (
    <div className={classes.countryContainer}>
      <img src={props.countryProperties.flags.svg} className={classes.flag} />
      <div className={classes.countryInfo}>
        <h3>Official name: {props.countryProperties.name.official}</h3>
        <h4>Short name: {props.countryProperties.name.common}</h4>
        <p>Country Code: {props.countryProperties.cca3}</p>
        <ul className={classes.languageList}>
          <h4>Languages:</h4>
          {Object.values(props.countryProperties.languages).map((language) => {
            return (
              <li className={classes.languageItem} key={Math.random()}>
                {language}
              </li>
            );
          })}
        </ul>
        <ul className={classes.borderList}>
          <h4>Borders:</h4>
          {props.countryProperties.borders
            ? props.countryProperties.borders.map((border) => {
                return (
                  <li
                    onClick={() => {
                      props.showBorderCountry(border);
                    }}
                    className={classes.borderItem}
                    key={Math.random()}
                  >
                    {border}
                  </li>
                );
              })
            : "No borders with any country"}
        </ul>
      </div>
      <FavoritesButton
        handleFavorites={props.handleFavorites}
        favorites={props.favorites}
        countryName={props.countryProperties.name.common}
      />
    </div>
  );
}
