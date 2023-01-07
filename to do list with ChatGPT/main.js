function addItem() {
  // Get the value of the input field
  const item = document.getElementById('item').value;

  // Add the item to the list
  const list = document.getElementById('todo-list');
  const newItem = document.createElement('li');
  newItem.innerHTML = item;
  list.appendChild(newItem);

  // Clear the input field
  document.getElementById('item').value = '';
}

function addItemOnEnter(event) {
  // Check if the Enter key was pressed
  if (event.key === 'Enter') {
    addItem();
  }
}

function clearList() {
  // Remove all of the items from the list
  var list = document.getElementById('todo-list');
  list.innerHTML = '';
}
