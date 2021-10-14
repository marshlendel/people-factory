const personForm = document.querySelector("form");
const heading = document.querySelector("h1")
const detailsDiv = document.querySelector("#details")

personForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.personName.value
  const favColor = e.target.favColor.value
  const age = e.target.age.value
  const liOne = document.createElement("li")
  detailsDiv.firstElementChild.appendChild(liOne)
  const liTwo = document.createElement("li")
  detailsDiv.firstElementChild.appendChild(liTwo)
  const liThree = document.createElement("li")
  detailsDiv.firstElementChild.appendChild(liThree)
  liOne.innerText = name
  liTwo.innerHTML = `
  Favorite Color
  <div style="background-color: ${favColor}; width: 100px; height: 100px;"></div>
  `
  liThree.innerText = age
}

