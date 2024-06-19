const getStoredCart = () => {
  const cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return [];
};

const addToLocalStorage = (id) => {
  const cartItems = getStoredCart();
  cartItems.push(id);
  const stringifiedCart = JSON.stringify(cartItems);
  localStorage.setItem("cart", stringifiedCart);
};

export { getStoredCart, addToLocalStorage };
