function validateForm() {
  var x = document.forms["'submit-to-google-sheet'"]["Email"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}