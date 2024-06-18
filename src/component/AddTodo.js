import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
  // Create a local react state of the this component with a content property set to nothing.
  constructor() {
    super();
    this.state = {
      content: "",
      date: "",
      preConditions: "",
      acceptanceCriteria: "",
    };
  }
  // The handleChange function updates the react state with the new input value provided from the user.
  // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
  // into the text field.
  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: new Date().toLocaleString("en-US"),
    });
  };
  // The handleSubmit function collects the forms input and puts it into the react state.
  // event.preventDefault() is called to prevents default event behavior like refreshing the browser.
  // this.props.addTodo(this.state) passes the current state (or user input) into the addTodo function defined
  // in the Home.js file which then adds the input into the list.
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo(this.state);
      this.setState({
        content: "",
        date: "",
        preConditions: "",
        acceptanceCriteria: "",
      });
    }
  };
  render() {
    return (
      // 1. When rendering a component, you can render as many elements as you like as long as it is wrapped inside
      // one div element.
      // 2. The return statement should include a text field input with the handleChange function from above that
      // is passed into an onChange event.
      // 3. The return should also include a button with the handleSubmit function from above that is passed into
      // an OnClick event.
      // 4. The value of the text field also should reflect the local state of this component.
      <div>
        <TextField
          label="New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
          data-testid="new-item-textfield"
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
            },
          }}
        />
        <TextField
          label="Pre-conditions"
          variant="outlined"
          onChange={(e) => this.setState({ preConditions: e.target.value })}
          value={this.state.preConditions}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
            },
          }}
        />
        <TextField
          label="Acceptance Criteria"
          variant="outlined"
          onChange={(e) =>
            this.setState({ acceptanceCriteria: e.target.value })
          }
          value={this.state.acceptanceCriteria}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
            },
          }}
        />
        <Button
          style={{
            marginLeft: "10px",
            backgroundColor: "orange",
            height: "56px",
          }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          data-testid="new-item-button"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddTodo;
