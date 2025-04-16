/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    try {
      if (index < 0 || index >= this.todos.length) {
        throw new Error("Something went wrong");
      }

      this.todos.splice(index, 1);
    } catch (error) {
      console.log("Remove Error: ", error.message);
    }
  }

  update(index, updatedTodo) {
    try {
      if (index < 0 || index >= this.todos.length) {
        throw new Error("Something went wrong");
      }
      this.todos[index] = updatedTodo;
    } catch (error) {
      console.log("Update Error:", error.message);
    }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    try {
      if (index < 0 || index >= this.todos.length) {
        throw new Error("Something went wrong");
      }
      return this.todos[index];
    } catch (error) {
      console.log("Get Error:", error.message);
      return null;
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
