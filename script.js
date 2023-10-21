const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0
let uncheckedCount = 0

function updateCounters() {
  itemCountSpan.textContent = itemCount
  uncheckedCountSpan.textContent = uncheckedCount
}

function newTodo() {
  const todoText = prompt('Enter a new TODO:')
  if (todoText) {
    const todoItem = document.createElement('li')
    todoItem.classList.add(classNames.TODO_ITEM)

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add(classNames.TODO_CHECKBOX)

    const text = document.createElement('span')
    text.textContent = todoText
    text.classList.add(classNames.TODO_TEXT)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add(classNames.TODO_DELETE)
    deleteButton.onclick = function () {
      todoItem.remove()
      itemCount--
      if (!checkbox.checked) {
        uncheckedCount--
      }
      updateCounters()
    }

    checkbox.onchange = function () {
      if (checkbox.checked) {
        uncheckedCount--
      } else {
        uncheckedCount++
      }
      updateCounters()
    }

    todoItem.appendChild(checkbox)
    todoItem.appendChild(text)
    todoItem.appendChild(deleteButton)

    list.appendChild(todoItem)
    itemCount++
    uncheckedCount++
    updateCounters()
  }
}

updateCounters()