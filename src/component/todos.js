import React from "react";
import "../component/todos.css";
import {
  Card,
  Grid,
  ListItemButton,
  ListItemText,
  Checkbox,
  Typography,
} from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Card
          key={todo.id}
          style={{ marginTop: 10, backgroundColor: "#d0e6f5" }}
        >
          <ListItemButton component="a" href="#simple-list">
            <Checkbox
              style={{ paddingLeft: 0 }}
              color="primary"
              onClick={() => deleteTodo(todo.id)}
            />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ListItemText primary={todo.content} secondary={todo.date} />
              </Grid>
              <Grid item xs={4}>
                <ListItemText primary={todo.preConditions} />
              </Grid>
              <Grid item xs={4}>
                <ListItemText primary={todo.acceptanceCriteria} />
              </Grid>
            </Grid>
          </ListItemButton>
        </Card>
      );
    })
  ) : (
    <p>Your todo list is empty. Time to relax!</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6">Title</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Conditions</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Criteria</Typography>
        </Grid>
      </Grid>
      {todoList}
    </div>
  );
};

export default Todos;
