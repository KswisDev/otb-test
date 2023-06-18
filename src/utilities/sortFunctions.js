const sortByProperty = (
  products,
  properyToSortBy,
  isNumber = false,
  sortOrder = "asc"
) => {
  return [...products].sort((a, b) => {
    const propertyA = isNumber
      ? a[properyToSortBy]
      : a[properyToSortBy].toLowerCase();
    const propertyB = isNumber
      ? b[properyToSortBy]
      : b[properyToSortBy].toLowerCase();

    let comparison = 0;
    if (propertyA < propertyB) {
      comparison = -1;
    }
    if (propertyA > propertyB) {
      comparison = 1;
    }
    return sortOrder === "desc" ? comparison * -1 : comparison;
  });
};

export { sortByProperty };
