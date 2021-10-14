const personForm = document.querySelector("form");
const heading = document.querySelector("h1")
const para = document.querySelector("#personalP")

personForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const nameValue = e.target.personName.value
  heading.innerText = nameValue
  const favColor = e.target.favColor.value
  heading.style.color = favColor
  para.innerText = `Hello, ${nameValue}, seems like your favorite color is ${favColor}!`
  para.style.border=`3px solid ${favColor}`
//   personName.value = ""
}


//Add another input to the form
//Use the values from both inputs in the h1

//Add an empty paragraph to the page. 
//Use the form values to do something with that paragraph

//Change the appearance of the paragraph based on a value from the form