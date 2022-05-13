import classes from "./FavoritesList.module.css";

interface IFavoritesList {
  favorites: string[];
  handleFavorites: (countryName: string) => void;
}

export default function FavoritesList(props: IFavoritesList) {
  return (
    <div className={classes.favoritesList}>
      <ul>
        {props.favorites.map((fav, i) => {
          return (
            <li className={classes.favoritesItem}>
              <span>
                {++i}. {fav}
              </span>
              <button onClick={() => props.handleFavorites(fav)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
