const salvar = document.getElementById("salvar");

salvar.addEventListener("click", validate);

function validate(event) {
  event.preventDefault();

  const name = document.getElementById("nome");
  let valid = true;

  if (!name.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    name.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
}
