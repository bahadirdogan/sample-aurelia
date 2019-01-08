// import 'bootstrap';
import { PLATFORM } from "aurelia-framework";
export class App {
  constructor() {
    this.heading = 'Todo List';
    this.heading2 = 'Kullanıcı Listesi'
    this.todos = [];
    this.todoDescription = '';
    this.getValues();
  }

  configureRouter(config, router) {
    config.map([
      { route: ['', 'home'],   name: 'home',    moduleId: PLATFORM.moduleName('home') }
    ]);

    this.router = router;
  }


  getValues() {
    fetch('https://jsonplaceholder.typicode.com/albums', {
        method: 'GET',
      }).then(resp => resp.json())
      .then(obj => {
        this.list = obj;
      });
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });

      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
