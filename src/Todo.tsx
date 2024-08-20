import { Component } from "react";
import Form from "./Form";
import Task from "./Task";
import Button from "./Button";

export type work = {
  done: boolean;
  id: string;
  title: string;
};

type TodoState = {
  todoList: work[];
  isForm: boolean;
};

class Todo extends Component<{}, TodoState> {
  constructor(props: {}) {
    super(props);
    const list = localStorage.getItem("todoList");
    const savedTodos: work[] = list ? JSON.parse(list) : [];
    this.state = {
      todoList: savedTodos,
      isForm: false,
    };
  }

  updateList = (newList: work[]) => {
    this.setState({ todoList: newList });
    localStorage.setItem("todoList", JSON.stringify(newList));
  };

  addTodo = (todoTitle: string) => {
    this.updateList([
      ...this.state.todoList,
      { id: todoTitle, title: todoTitle, done: false },
    ]);
  };

  deleteTodo = (todoTitle: string) => {
    this.updateList(
      this.state.todoList.filter((t: work) => t.title !== todoTitle)
    );
  };

  markDone = (todo: work) => {
    const updatedList = this.state.todoList.map((t) =>
      t.id === todo.id ? { ...t, done: true } : t
    );
    this.updateList(updatedList);
  };

  markUndone = (todo: work) => {
    const updatedList = this.state.todoList.map((t) =>
      t.id === todo.id ? { ...t, done: false } : t
    );
    this.updateList(updatedList);
  };

  handleClick = () => {
    this.setState((prevState) => ({ isForm: !prevState.isForm }));
  };

  render() {
    const { todoList, isForm } = this.state;
    const doneWorks = todoList.filter((t: work) => t.done);
    const leftWorks = todoList.filter((t: work) => !t.done);

    const addButton = " + ADD";

    return (
      <div className="flex flex-col gap-5">
        <h1 className="font-sans text-2xl font-bold">Things to get done</h1>
        <span className="flex flex-col gap-2">
          <h2 className="font-sans text-xl">Things to do</h2>
          {!leftWorks.length && <p className="text-gray-500">No tasks to do</p>}
          {leftWorks.map((t: work) => (
            <Task
              key={t.id}
              todo={t}
              onCheck={this.markDone}
              onDelete={this.deleteTodo}
            />
          ))}
          {isForm && <Form setForm={this.handleClick} onSave={this.addTodo} />}
          {!isForm && (
            <Button
              title={addButton}
              className="bg-green-500 hover:bg-green-700 text-white"
              onClick={this.handleClick}
            />
          )}
        </span>
        <span className="flex flex-col gap-2 ">
          <h3 className="font-sans text-xl">Things done</h3>
          {!doneWorks.length && (
            <p className="text-gray-500">Nothing done yet!</p>
          )}
          {doneWorks.map((t: work) => (
            <Task
              key={t.id}
              todo={t}
              onCheck={this.markUndone}
              onDelete={this.deleteTodo}
            />
          ))}
        </span>
      </div>
    );
  }
}

export default Todo;
