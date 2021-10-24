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
  const dt = document.createElement("dt")
  const dd = document.createElement("dd")
  const li = document.createElement("li")
  dt.innerText = fieldName
  dd.innerHTML = value
  li.appendChild(dt)
  li.appendChild(dd)
  return li
}

function renderList(personData) {
  const list = document.createElement("dl")
  for (prop in personData) {
    list.appendChild(renderListItem(prop, personData[prop]))
  }
  return list
}

function handleSubmit(e) {
  e.preventDefault();
  const name = this.personName.value
  const favColor = this.favColor.value
  const age = this.age.value

  const person = {
    name: name,
    favColor: renderColor(favColor),
    age: age,
  }

  detailsDiv.appendChild(renderList(person))
}

