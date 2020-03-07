export const replaceSpace = word => {
  return word.replace(/%20/g, ' ');
};

export const filterMovieList = (movieList, filterType, value) => {
  if (filterType === 'year') {
    return movieList.filter(item => item.productionYear === parseInt(value));
  } else if (filterType === 'genre') {
    return movieList.filter(item => item.genre === value);
  }
  return [];
};
