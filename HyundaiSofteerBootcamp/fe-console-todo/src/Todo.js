class Todo {
  #todos;
  #todo;
  #doing;
  #done;

  constructor(todos) {
    this.#todos = todos;
    this.#todo = [];
    this.#doing = [];
    this.#done = [];
    this.#divideStatus();
  }

  #divideStatus() {
    this.#todo = this.#todos.filter((res) => res.status === 'todo');
    this.#doing = this.#todos.filter((res) => res.status === 'doing');
    this.#done = this.#todos.filter((res) => res.status === 'done');
  }

  #validate(id) {
    const a = (el) => id === el.id;

    if (this.#todos.findIndex(a) !== -1) return false;

    return true;
  }

  printAll() {
    return console.log(`현재상태 : todo: ${this.#todo.length}개, doing: ${this.#doing.length}, done: ${this.#done.length}\n`);
  }

  printType(type) {
    let tmp = [];

    type === 'todo' && (tmp = this.#todo);
    type === 'doing' && (tmp = this.#doing);
    type === 'done' && (tmp = this.#done);

    //prettier-ignore
    const text = tmp.length > 0 
                  ? `${type}리스트 : 총 ${tmp.length}건 :` + tmp.map((info) => ` '${info.name} , ${info.id}' `) + '\n'
                  : `${type}리스트 : 총 ${tmp.length}건\n`;

    return console.log(text);
  }

  add(name, tags) {
    const rand = Math.floor(Math.random() * 10000) + 1;

    if (!this.#validate(rand)) this.add(name, tags);

    const newTodo = {
      name: name,
      tags: tags,
      status: 'todo',
      id: rand,
    };
    this.#todo.push(newTodo);
    this.#todos.push(newTodo);

    console.log(`${name} 1개가 추가됐습니다.(id : ${rand})`);

    return this.printAll();
  }

  remove(id) {
    let name = '',
      type = '';
    id = parseInt(id);

    if (this.#validate(id)) return console.log('존재하지 않는 ID 입니다.');

    this.#todos = this.#todos.filter((todo) => {
      if (parseInt(id) === todo.id) {
        name = todo.name;
        type = todo.status;
        return false;
      }
      return true;
    });

    this.#divideStatus();
    console.log(`${name} ${type}가 목록에서 삭제됐습니다`);

    return this.printAll();
  }

  update(id, type) {
    let name = '';
    id = parseInt(id);

    if (this.#validate(id)) return console.log('존재하지 않는 ID 입니다.');

    this.#todos.forEach((todo) => {
      if (todo.id === id) {
        todo.status = type;
        name = todo.name;

        return;
      }
    });

    this.#divideStatus();
    console.log(`${name}가 ${type}으로 상태가 변경됐습니다`);

    return this.printAll();
  }
}

module.exports = Todo;