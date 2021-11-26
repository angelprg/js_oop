console.clear();

const angel = {
  username: "angelprg",
  email: "angel.resendiz@gmail.com",
  token: "",
  printInfo: function () {
    if (this.token !== "") console.log(`${this.username} (${this.email})`);
    else console.log("Error: No ha iniciado sesión");
  },
  changeEmail: function (newEmail) {
    this.email = newEmail;
  },
  login: function (username, pass) {
    if (username === this.username && pass === "secreto") {
      this.token = "lsjdflaksjdf489789";
    } else {
      console.log("Error al iniciar sesión");
    }
  },
  logout: function () {
    this.token = "";
  },
  test: () => {
    console.log(this.username)
    console.log("Soy un test")
  }
};

const juan = {
  username: "juanperez",
  email: "juan.perez@gmail.com",
  token: "",
  printInfo: function () {
    if (this.token !== "") console.log(`${this.username} (${this.email})`);
    else console.log("Error: No ha iniciado sesión");
  },
  changeEmail: function (newEmail) {
    this.email = newEmail;
  },
  login: function (username, pass) {
    if (username === this.username && pass === "secreto") {
      this.token = "lsjdflaksjdf489789";
    } else {
      console.log("Error al iniciar sesión");
    }
  },
  logout: function () {
    this.token = "";
  },
  test: () => {
    console.log(this.username)
    console.log("Soy un test")
  }
};

angel.printInfo();
angel.login("angelprg", "secreto");
angel.printInfo();
angel.logout();
angel.printInfo();
angel.test();

juan.login('juanperez', 'secreto')
juan.printInfo()
