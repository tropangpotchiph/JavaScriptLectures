//https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/todos?_limit=10

//#####################################
//outputting it to the console
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// getTodos();

//#####################################
//displaying the items at the DOM
//
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();

//
//#####################################
// to cater the completed activity by adding the class done
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         if (todo.completed) {
//           div.classList.add('done');
//         }

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();
//#####################################
// putting attributes for each task (ID)
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         div.setAttribute('data-id', todo.id);

//         if (todo.completed) {
//           div.classList.add('done');
//         }

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();
//

//#####################################
//addTodoToDOM
//we can reuse the function (DRY)
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement('div');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id);

//   if (todo.completed) {
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
// };

// getTodos();

//
//#####################################
//createToDo
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement('div');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id);

//   if (todo.completed) {
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
// };

// const createTodo = (e) => {
//   e.preventDefault();
//   console.log(e.target.firstElementChild.value);
//   const newTodo = { title: e.target.firstElementChild.value, completed: false };

//   fetch(apiUrl, {
//     method: 'POST',
//     body: JSON.stringify(newTodo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => addTodoToDOM(data));
//   console.log(e.target.firstElementChild.value);
// };

// const init = () => {
//   document.addEventListener('DOMContentLoaded', getTodos);
//   document.querySelector('#todo-form').addEventListener('submit', createTodo);
// };

// init();
//
//#####################################
//
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiUrl + '?_limit=5')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();
  //   console.log(e.target.firstElementChild.value);
  const newTodo = { title: e.target.firstElementChild.value, completed: false };

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));
  //   console.log(e.target.firstElementChild.value);
};

const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');
    // console.log(e.target.dataset.id);
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
};

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    // console.log('delete');
    const id = e.target.dataset.id;

    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();
//
//#####################################
//#####################################
//#####################################
