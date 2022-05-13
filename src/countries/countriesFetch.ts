import { Country } from "./countriesInterfaces";

export async function countriesFetch(path: string): Promise<Country[]> {
  const responce = await fetch("https://restcountries.com/v3.1/" + path);
  return await responce.json();
}
