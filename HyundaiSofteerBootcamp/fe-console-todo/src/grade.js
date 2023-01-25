const todos = require('./todos');
const input = require('./input');
const Todo = require('./Todo');

const playTodo = async () => {
  console.log('종료를 원하시면 0을 입력하세요!\n');

  while (true) {
    const query = await input();
    const [command, typeOrId, tagOrStatus] = [...query];

    if (command === 'show') {
      typeOrId === 'all' ? TodoList.printAll() : TodoList.printType(typeOrId);
    } else if (command === 'add') {
      TodoList.add(typeOrId, tagOrStatus);
    } else if (command === 'delete') {
      TodoList.remove(typeOrId);
    } else if (command === 'update') {
      TodoList.update(typeOrId, tagOrStatus);
    }
  }
};

const TodoList = new Todo(todos);
playTodo();