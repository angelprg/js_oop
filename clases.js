console.clear();

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.token = "";
  }
  printInfo() {
    if (this.token !== "")console.log(`->${this.username} (${this.email})`);
    else console.log("Error: No ha iniciado sesión");
  }
  login(username, pass) {
    if (username === this.username && pass === "secreto") {
      this.token = "lsjdflaksjdf489789";
    } else {
      console.log("Error al iniciar sesión");
    }
  }
  logout(){
    this.token = ""
  }
}

class Admin extends User {
  restartSystem(){
    console.log('Reiniciando el sistema')
  }
}

class Customer extends User {
  buy(producto){
    console.log(`Comprando ${producto}`)
  }
}

class Cashier extends Customer {
  cancel(producto){
    console.log(`Cancelando ${producto}`)
  }
}

const juan = new User("juanperez", "juan.perez@gmail.com");
juan.login("juanperez", "secreto");
juan.printInfo();
juan.logout();
juan.printInfo();

const angel = new Admin("angelprg", "angel.resendiz@gmail.com")
angel.login("angelprg", "secreto");
angel.printInfo();
angel.restartSystem();

const pepe = new Customer("pepepecas", "pepe@gmail.com")
pepe.login("pepepecas", "secreto");
pepe.printInfo();
pepe.buy("Tamal")

const pepeCajero = new Cashier("pepepecas", "pepe@gmail.com")
pepeCajero.login("pepepecas", "secreto");
pepeCajero.printInfo();
pepeCajero.buy("Tamal")
pepeCajero.cancel("Tamal")



