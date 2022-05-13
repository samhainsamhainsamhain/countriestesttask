interface IFavoritesButton {
  countryName: string;
  favorites: string[];
  handleFavorites: (countryName: string) => void;
}

export default function FavoritesButton(props: IFavoritesButton) {
  return (
    <button onClick={() => props.handleFavorites(props.countryName)}>
      {props.favorites.includes(props.countryName)
        ? "Remove from Favorites"
        : "Add to Favorites"}
    </button>
  );
}
