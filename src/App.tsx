import { Component } from "react";
import Navbar from "./Navbar";
import Todo from "./Todo";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="px-3 py-10">
          <div className="m-auto max-w-screen-lg">
            <Todo />
          </div>
        </div>
      </>
    );
  }
}

export default App;
