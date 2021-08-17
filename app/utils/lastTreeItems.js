const lastTreeItems = (element) => {
  return element.slice(element.length - 3, element.length).reverse();
};

export default lastTreeItems;
