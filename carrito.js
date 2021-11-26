class Cart {
  //// Tu código empieza aquí ///


  //// Tu código termina aquí ///
}

const carrito = new Cart();

carrito.addToCart("Tamal Verde", 30);
carrito.addToCart("Tamal Verde", 30);
carrito.printItems();
// Tu carrito tiene 2 artículos por un total de $60 MXN

carrito.removeFromCart("TamalVerde", 30);
carrito.addToCart("Atole", 20);
carrito.printItems();
// Tu carrito tiene 2 artículos por un total de $50 MXN

carrito.emptyCart();
carrito.printItems();
// Tu carrito está vacío

// Nice to have:
carrito.addToCart("Tamal Verde", 30);
carrito.addToCart("Tamal Verde", 30);
carrito.removeFromCart("TamalVerde", 60);
carrito.printItems();
// Tu carrito tiene 1 artículos por un total de $0 MXN WTF!??
