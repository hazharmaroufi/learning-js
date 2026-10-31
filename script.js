
let adminInput = prompt("username:  ");
if (adminInput === "Admin") {
  let passwordInput = prompt("password: ")
  if (passwordInput === "TheMaster") {
    alert("Welcome!")
  } else if (passwordInput === "" || passwordInput === null) {
    alert("Canceled")
  } else {
    alert("Wrong password")
  }

} else if (adminInput === "" || adminInput === null) {
  alert("Canceled")
} else {
  alert("I don't know you")
}