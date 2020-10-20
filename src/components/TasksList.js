import axios from "axios";
import React, { Component } from "react";

class TasksList extends Component {
  state = {
    tasks: [],
  };
  componentDidMount = () => {
    axios
      .get("http://localhost:5000/task")
      .then((response) => {
        this.setState({
          tasks: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { tasks } = this.state;
    return (
      <ul>
        {tasks.length &&
          tasks.map((task) => <li key={task._id}>{task.title}</li>)}
      </ul>
    );
  }
}

export default TasksList;
