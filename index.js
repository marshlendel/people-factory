const personForm = document.querySelector("form");
const heading = document.querySelector("h1")

personForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const nameValue = e.target.personName.value
  heading.innerText = nameValue
  personName.value = ""
}
