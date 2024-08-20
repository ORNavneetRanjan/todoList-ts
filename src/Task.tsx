import { Component } from "react";
import { MdDelete } from "react-icons/md";
import { work } from "./Todo";

type Props = {
  todo: work;
  onCheck: (todo: work) => void;
  onDelete: (title: string) => void;
};

class Task extends Component<Props> {
  handleDelete = () => {
    this.props.onDelete(this.props.todo.title);
  };

  onChange = () => {
    const updatedTodo = { ...this.props.todo, done: !this.props.todo.done };
    this.props.onCheck(updatedTodo);
  };

  render() {
    const { todo } = this.props;

    return (
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={todo.title}
          name={todo.title}
          checked={todo.done}
          onChange={this.onChange}
          className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
        />
        <label htmlFor={todo.title} className="text-gray-700 text-xl">
          {todo.title}
        </label>
        <button onClick={this.handleDelete}>
          <MdDelete className="text-xl" />
        </button>
      </div>
    );
  }
}

export default Task;
