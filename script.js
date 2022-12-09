/*
 * Display the contents of the first input in the 
 * span with an id of "display-firstname" on keyup event
 *
 */
let nameInput = document.querySelector("#firstname");
let displayName = document.querySelector("#display-firstname");

nameInput.addEventListener("keyup", (event) => {
  displayName.textContent = nameInput.value;
});

/*
 * Display the section "a-hard-truth" if the age is above 18
 * 
 */
let ageInput = document.querySelector("#age");
let hiddenDisplay = document.querySelector("#a-hard-truth");

ageInput.addEventListener("keyup", (event) => {
  let age = Number(ageInput.value);
  if (age >= 18){
    hiddenDisplay.style.visibility = "unset";
  }else{
    hiddenDisplay.style.visibility = "hidden";
  }
});

/*
 * Show a visual hint if the password is < 6 characters long
 * or if the confirmation doesnot match.
 *
 */
let password = document.querySelector("#pwd");
let passwordConfirm = document.querySelector("#pwd-confirm");

password.addEventListener("keyup", (event) => {
  if (password.value.length < 6){
    password.style.backgroundColor = "coral";
  }else{
    password.style.backgroundColor = "lightgreen";
  }
});

passwordConfirm.addEventListener("keyup", (event) => {
  if (passwordConfirm.value != password.value){
    passwordConfirm.style.backgroundColor = "coral";
  }else{
    passwordConfirm.style.backgroundColor = "lightGreen";
  }
});

/*
 *
 * Toggle the dark mode: background black and text white
 *
 */
let toggleDarkMode = document.querySelector("#toggle-darkmode");
toggleDarkMode.addEventListener("change", function(even) {
  if (this.value == "dark") {
    document.body.style = "color: white; background-color: black;";
  }else {
    document.body.style = "";
  }
});
