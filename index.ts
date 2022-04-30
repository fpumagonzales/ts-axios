import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(
  response => {
    
    //response as Todo interface
    const todo = response.data as Todo;

    printInLog(todo.id, todo.title, todo.completed);
  }
);

const printInLog = (id: number, title: string, completed: boolean) => {
  console.log(`ID: ${id}`);
  console.log(`TITLE: ${title}`);
  console.log(`COMPLETED: ${completed}`);
};