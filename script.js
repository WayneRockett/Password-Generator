document.getElementById("generate-password").addEventListener("click", () => {
  const passwordLength = document.getElementById("password-length").value;
  const generatedPassword = generatePassword(passwordLength);
  document.getElementById("password").value = generatedPassword;
  document.getElementById("copy-password").disabled = false; // Enable the "Copy Password" button
});

document.getElementById("copy-password").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});

function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
