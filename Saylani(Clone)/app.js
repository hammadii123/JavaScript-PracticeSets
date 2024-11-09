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

document.getElementById("submitBtn").addEventListener("click", function () {
  // Get values from the form inputs
  const country = document.getElementById("country").value;
  const course = document.getElementById("course").value;
  const yourName = document.getElementById("yourName").value;
  const email = document.getElementById("email").value;
  const cnic = document.getElementById("cnic").value;
  const dob = document.getElementById("dob").value;
  const city = document.getElementById("city").value;
  const proficiency = document.getElementById("proficiency").value;
  const fatherName = document.getElementById("fatherName").value;
  const phone = document.getElementById("phone").value;
  const fatherCnic = document.getElementById("fatherCnic").value;
  const gender = document.getElementById("gender").value;
  const qualification = document.getElementById("qualification").value;
  const laptop = document.getElementById("laptop").value;

  // Log values to the console
  console.log("Country:", country);
  console.log("Course:", course);
  console.log("Your Name:", yourName);
  console.log("Father's Name:", fatherName);
  console.log("Email:", email);
  console.log("CNIC:", cnic);
  console.log("Date of Birth:", dob);
  console.log("City:", city);
  console.log("Proficiency:", proficiency);
  console.log("Phone:", phone);
  console.log("Father's CNIC:", fatherCnic);
  console.log("Gender:", gender);
  console.log("Qualification:", qualification);
  console.log("Laptop:", laptop);
});
