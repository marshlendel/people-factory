const personForm = document.querySelector("form");
const heading = document.querySelector("h1")
const detailsDiv = document.querySelector("#details")

personForm.addEventListener("submit", handleSubmit);

function renderColor(color) {
  const colorDiv = document.createElement("div")
  colorDiv.style.backgroundColor = color
  colorDiv.style.height = "50px"
  colorDiv.style.width = "100px"
  return colorDiv.outerHTML
}

function renderListItem(fieldName, value) {
  const li = document.createElement("li")
  li.innerHTML = `${fieldName}: ${value}`
  return li
}

function renderList(personData) {
  const list = document.createElement("ul")
  for (prop in personData) {
    list.appendChild(renderListItem(prop, personData[prop]))
  }
  return list
}

function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.personName.value
  const favColor = e.target.favColor.value
  const age = e.target.age.value

  const person = {
    name: name,
    favColor: renderColor(favColor),
    age: age,
  }

  detailsDiv.appendChild(renderList(person))
}

