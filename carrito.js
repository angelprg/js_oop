console.clear();
class Cart {
  //// Tu código empieza aquí ///
  constructor() {
    this.qty = 0;
    this.totalPrice = 0;
  }
  addToCart(_, price) {
    this.qty = this.qty + 1;
    this.totalPrice += price;
  }
  removeFromCart(_, price) {
    this.totalPrice -= price;
    this.qty = this.qty - 1;
  }
  emptyCart() {
    this.qty = 0;
    this.totalPrice = 0;
  }
  printItems() {
    if (this.qty === 0) {
      console.log("Tu carrito está vacío");
    } else {
      const wtf =
        (this.qty === 0 && this.totalPrice > 0) ||
        (this.totalPrice === 0 && this.qty > 0)
          ? "WTF?!!"
          : "";
      console.log(
        `Tu carrito tiene ${this.qty} artículos por un total de $${this.totalPrice} MXN ${wtf}`
      );
    }
  }

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
carrito.printItems();
carrito.removeFromCart("Tamal Verde", 60);
carrito.printItems();
// Tu carrito tiene 1 artículos por un total de $0 MXN WTF!??
