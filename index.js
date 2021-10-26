const PeopleFactory = {
  renderColor(color) {
    const colorDiv = document.createElement("div");
    colorDiv.style.backgroundColor = color;
    colorDiv.style.height = "50px";
    colorDiv.style.width = "100px";
    return colorDiv.outerHTML;
  },
  renderListItem(fieldName, value) {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    const li = document.createElement("li");
    dt.innerText = fieldName;
    dd.innerHTML = value;
    li.appendChild(dt);
    li.appendChild(dd);
    return li;
  },
  renderList(personData) {
    const list = document.createElement("dl");
    for (prop in personData) {
      list.appendChild(this.renderListItem(prop, personData[prop]));
    }
    return list;
  },
  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.personName.value;
    const favColor = e.target.favColor.value;
    const age = e.target.age.value;

    const person = {
      name: name,
      favColor: this.renderColor(favColor),
      age: age,
    };

    const detailsDiv = document.querySelector("#details");
    detailsDiv.appendChild(this.renderList(person));
  },
  init(formName) {
    const form = document.querySelector(formName);
    form.addEventListener("submit", this.handleSubmit.bind(this));
  }, 
};

//Pass in the selector for your form
PeopleFactory.init("form");
