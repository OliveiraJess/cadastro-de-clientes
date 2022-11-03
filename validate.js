const salvar = document.getElementById("salvar");

salvar.addEventListener("click", validate);

function validate(event) {
  event.preventDefault();

  const name = document.getElementById("nome");
  const email = document.getElementById("email");

  let valid = true;

  if (!name.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    name.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }

  if (!email.value) {
    const nameError = document.getElementById("emailError");
    emailError.classList.add("visible");
    email.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
  }

  return valid;
}
