const personForm = document.querySelector("form");
const heading = document.querySelector("h1")
const detailsDiv = document.querySelector("#details")

personForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const nameValue = e.target.personName.value
  detailsDiv.innerText = nameValue
  personName.value = ""
}


//Add another input to the form
//Use the values from both inputs in the h1

//Add an empty paragraph to the page. 
//Use the form values to do something with that paragraph

//Change the appearance of the paragraph based on a value from the form