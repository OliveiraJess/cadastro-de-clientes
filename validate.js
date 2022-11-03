const salvar = document.getElementById("salvar");

salvar.addEventListener("click", validate);

function validate(event) {
  event.preventDefault();

  const name = document.getElementById("nome");
  const email = document.getElementById("email");
  const cell = document.getElementById("celular");


  let valid = true;

  if (!name.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    name.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }

  if (!email.value) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    email.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
  }

  if (!cell.value) {
    const cellError = document.getElementById("cellError");
    cellError.classList.add("visible");
    cell.classList.add("invalid");
    cellError.setAttribute("aria-hidden", false);
    cellError.setAttribute("aria-invalid", true);
  }

  return valid;
}
