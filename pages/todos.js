import { Box, Heading, Text, VStack } from '@chakra-ui/layout';
import React, { useState, useEffect } from 'react';
import * as api from '../utils';

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.readTodos();
      console.log(result.data);
      setTodos(result.data);
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await api.readTodos();
    console.log(result.data);
    setTodos(result.data);
  };
  const createTodo = async () => {
    try {
      const { data } = await api.createTodo(todo);
      setTodo([...todos, data]);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack mt="20px" spacing="20px">
      <Heading my="25px">The todo crud app...</Heading>
      <input
        type="text"
        placeholder="title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="todo details"
        value={todo.detail}
        onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
      />
      <input
        type="date"
        value={todo.date}
        onChange={(e) => setTodo({ ...todo, date: e.target.value })}
      />
      <button type="submit" onClick={createTodo}>
        Add
      </button>
      {/* <pre>{JSON.stringify(todo, null, '\t')}</pre> */}
      <VStack pb="100px">
        {todos.map((todo) => (
          <Box
            w="50%"
            borderWidth="2px"
            borderRadius="15px"
            py="5px"
            px="50px"
            borderColor="black"
            key={todo._id}
          >
            <VStack>
              <Text>{todo.title}</Text>
              <Text>{todo.date}</Text>
              <button>delete?</button>
            </VStack>
            <p>{todo.detail}</p>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
}

export default App;
