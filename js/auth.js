class Auth {
  constructor() {
    document.querySelector("body").style.display = "none";
    const signupAuth = localStorage.getItem("signupAuth");
    this.validateAuth(signupAuth);
  }

  validateAuth(auth) {
    if (auth != 1) {
      window.location.replace("/Signup.html");
    } else {
      document.querySelector("body").style.display = "block";
    }
  }

  logOut() {
    localStorage.removeItem("auth");
    window.location.replace("/");
  }
}
