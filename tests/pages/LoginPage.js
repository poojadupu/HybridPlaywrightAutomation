exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginbtn = "#login2";
    this.username = "//input[@id='loginusername']";
    this.password = "//input[@id='loginpassword']";
    this.loginbutton = "//button[contains(text(),'Log in')]";
  }

  async loginpage() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }

  async clickonLogin(username, password) {
    await this.page.locator(this.loginbtn).click();
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginbutton).click();
  }
};
