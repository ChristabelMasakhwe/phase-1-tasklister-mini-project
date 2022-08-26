document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
e.preventDefault()
createToDo(e.target.My_toDo.value)
})
});
function createToDo(todo) {
  //creates a list element to be added into an unordered list
  let li = document.createElement('li')
  //creates a button 
  let btn = document.createElement('button')
  // Adding the click listener event on the button content and classes
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  btn.classList.add('btn', 'btn-danger')
  //Added the input value of the form to the list
  li.textContent = todo;
  //child of list element
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e) {
  // give the btn functionality to delete the parent Node containing button and 
  // the task
  e.target.parentNode.remove()
}