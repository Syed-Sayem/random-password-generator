const btnE1 = document.querySelector(".btn");
const inputE1 = document.getElementById("input");
const copyIconE1 = document.querySelector(".fa-copy");
const alertContainerE1 = document.querySelector(".alert-container");
btnE1.addEventListener("click", () => {
  createpassword();
});
copyIconE1.addEventListener("click", () => {
  copyPassword();
  if (inputE1.value) {
    alertContainerE1.classList.remove("active");
    setTimeout(() => {
      alertContainerE1.classList.add("active");
    }, 2000);
  }
});
function createpassword() {
  const chars =
    "0123456789qwertyuiop[]asdfghjkl;'\zxcvbnmQWERTYUIOP{}ASDFGHJKL:ZXCVBNM?";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputE1.value = password;
  alertContainerE1.innerText = password + " Copied!";
}

function copyPassword() {
  inputE1.select(); //This is for Laptop
  inputE1.setSelectionRange(0, 9999); //This is for Mobile
  navigator.clipboard.writeText(inputE1.value);
}
