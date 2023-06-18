const sortByProperty = (products, properyToSortBy, isNumber = false) => {
  return [...products].sort((a, b) => {
    const propertyA = isNumber
      ? a[properyToSortBy]
      : a[properyToSortBy].toLowerCase();
    const propertyB = isNumber
      ? b[properyToSortBy]
      : b[properyToSortBy].toLowerCase();

    if (propertyA < propertyB) {
      return -1;
    }
    if (propertyA > propertyB) {
      return 1;
    }
    return 0;
  });
};

export { sortByProperty };
