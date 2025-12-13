export function calculateTotalPrice(cartItems) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return Number(total.toFixed(2)); 
}
