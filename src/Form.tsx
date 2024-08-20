import { Component, ChangeEvent } from "react";
import Button from "./Button";

type Props = {
  setForm: (value: boolean) => void;
  onSave: (todoTitle: string) => void;
};

type State = {
  todoTitle: string;
};

class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todoTitle: "",
    };
  }

  handleSave = () => {
    const { todoTitle } = this.state;
    const { onSave, setForm } = this.props;

    console.log(todoTitle);
    if (todoTitle.trim()) {
      onSave(todoTitle);
      console.log("data saved");
      setForm(false);
    }
  };

  handleCancel = () => {
    const { setForm } = this.props;
    console.log("cancel");
    setForm(false);
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ todoTitle: e.target.value });
  };

  render() {
    const { todoTitle } = this.state;

    return (
      <div className="p-2 border-2 border-green-200 rounded-md">
        <h1 className="text-xl font-sans">Create a todo</h1>
        <input
          type="text"
          placeholder="Enter a todo"
          value={todoTitle}
          onChange={this.handleChange}
          className="border rounded-md p-2 mb-2 max-w-screen-lg"
        />
        <span className="flex gap-2">
          <Button
            title="Save"
            onClick={this.handleSave}
            className="rounded-md text-white bg-green-500 hover:bg-green-700 px-4 py-2"
          />
          <Button
            title="Cancel"
            onClick={this.handleCancel}
            className="rounded-md bg-white hover:bg-gray-200 px-4 py-2"
          />
        </span>
      </div>
    );
  }
}

export default Form;
