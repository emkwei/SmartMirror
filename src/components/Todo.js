import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  background-color: #282c34;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 40px auto;
`;

const TodoTitle = styled.h2`
  font-size: 24px;
  text-align: center;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  background-color: #3c4049;
  margin: 8px 0;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoText = styled.span`
  font-size: 18px;
`;

function Todo() {
  // Static data for the todo list
  const todos = [
    { id: 1, task: 'Finish React prototype', completed: false },
    { id: 2, task: 'Review styled-components', completed: true },
    { id: 3, task: 'Plan presentation', completed: false },
  ];

  return (
    <TodoContainer>
      <TodoTitle>Todo List</TodoTitle>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <TodoText>{todo.task}</TodoText>
            {todo.completed ? (
              <span role="img" aria-label="Completed">
                ✔️
              </span>
            ) : (
              <span role="img" aria-label="Not Completed">
                ❌
              </span>
            )}
          </TodoItem>
        ))}
      </TodoList>
    </TodoContainer>
  );
}

export default Todo;
