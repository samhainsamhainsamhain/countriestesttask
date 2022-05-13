import {useState} from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import { Country } from './countries/countriesInterfaces';

function App() {
  const [searchResult, setSearchResult] = useState<Country[] | null>(
    null
  );

  function getSearchResult(queryResult: Country[]) {
    setSearchResult(queryResult)
  }

  return (
    <div className="App">
      <SearchBox onSearchResultReceived={getSearchResult}/>
    </div>
  );
}

export default App;
