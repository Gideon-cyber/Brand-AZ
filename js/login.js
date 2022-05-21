class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      var error = 0;
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (self.validateFields(input) == false) {
          error++;
        }
      });
      if (error == 0) {
        //do login API here
        localStorage.setItem("auth", 1);
        this.form.submit();
      }
    });
  }

  validateFields(field) {
    if (field.type == "password") {
      if (field.value.length < 6) {
        this.setStatus(
          field,
          `${field.placeholder} must be at least 6 characters`,
          "error"
        );
        return false;
      } else {
        this.setStatus(field, null, "Success");
        return true;
      }
    } else {
      this.setStatus(field, null, "Success");
      return true;
    }
  }

  setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".error-message");

    if (status == "success") {
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      field.classList.remove("input-error");
    }

    if (status == "error") {
      errorMessage.innerText = message;
      field.classList.add("input-error");
    }
  }
}

const form = document.querySelector(".loginForm");
if (form) {
  const fields = ["email", "password"];
  const validator = new Login(form, fields);
}
