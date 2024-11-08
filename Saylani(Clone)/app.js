function submit() {
  if (
    document.getElementById("cnic").value == 123 &&
    document.getElementById("password").value == "admin"
  ) {
    alert("Login Successful!");
    window.location.href = "./form.html";
  } else {
    alert("Invalid Cnic or Password!");
  }
}
