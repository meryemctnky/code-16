import { useState, useEffect, useContext, createContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addItem = (data) => {
    setFavorites([...favorites, data]);
  };

  const removeItem = (data, i) => {
    const newFavorites = [...favorites];
    newFavorites.splice(i, 1);
    setFavorites(newFavorites);
  };

  const contextValue = {
    favorites,
    setFavorites,
    addItem,
    removeItem,
  };

  return <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>;
};

export default FavoritesProvider;
