let counter = 1;
function addItem() {
  // Get the value of the input field
  const item = document.getElementById("item").value;

  // Add the item to the list
  const list = document.getElementById("todo-list");
  const newItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  newItem.appendChild(checkbox);
  newItem.innerHTML += item;
  list.appendChild(newItem);

  // const ul = document.querySelector('.ul');
  newItem.innerHTML = counter + ". " + item;
  newItem.classList.add("list-item-border");
  list.appendChild(newItem);
  counter++;

  // ul.classList.add('active');
  checkbox.addEventListener("click", function () {
    newItem.classList.toggle("done");
  });

  // Clear the input field
  document.getElementById("item").value = "";
}

function addItemOnEnter(event) {
  // Check if the Enter key was pressed
  if (event.key === "Enter") {
    addItem();
  }
}

function clearList() {
  // Remove all of the items from the list
  var list = document.getElementById("todo-list");
  list.innerHTML = "";
}
