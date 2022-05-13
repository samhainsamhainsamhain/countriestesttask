import React, { useState } from "react";

import { countriesFetch } from "../../countries/countriesFetch";
import { Country } from "../../countries/countriesInterfaces";

import classes from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearchResultReceived: (searchResult: Country[]) => void;
}

export default function SearchBox(props: SearchBoxProps) {
  const [query, setQuery] = useState("");

  function queryChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  async function getSearchResult(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const queryResult = (await countriesFetch(`name/${query}`)) as Country[];
    props.onSearchResultReceived(queryResult);
  }

  return (
    <header className={classes.searchBox}>
      <form className={classes.searchForm} onSubmit={getSearchResult}>
        <input
          placeholder="Enter Country Name"
          onChange={queryChangeHandler}
          value={query}
        />
        <button type="submit">Search Country</button>
      </form>
    </header>
  );
}
