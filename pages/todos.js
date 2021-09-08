import { Input } from '@chakra-ui/input';
import { Box, Grid, Heading, Text, VStack, HStack } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useState, useRef, useEffect } from 'react';
import * as todoAPI from '../utils';
import '@fontsource/inter';
import '@fontsource/poppins';
import '@fontsource/raleway';

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const inputAreaRef = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const result = await todoAPI.readTodos();
      console.log(result.data);
      setTodos(result.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!inputAreaRef.current.contains(e.target)) {
        console.log('outside the input area');
        setEdit(false);
        setTodo({
          title: '',
          detail: '',
          date: null,
        });
      } else {
        console.log('inside the input area');
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, []);

  const fetchData = async () => {
    const result = await todoAPI.readTodos();
    console.log(result.data);
    setTodos(result.data);
  };
  const createTodo = async () => {
    try {
      const { data } = await todoAPI.createTodo(todo);
      setTodo([...todos, data]);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (id) => {
    await todoAPI.deleteTodo(id);
    const result = await todoAPI.readTodos();
    setTodos(result.data);
  };
  const editTodo = (id, title, detail, date) => {
    setTodo({ id, title, detail, date });
    console.log('edit is true');
    setEdit(true);
  };
  const updateTodo = async () => {
    const { id } = todo;
    delete todo.id;
    await todoAPI.updateTodo(id, todo);
    const result = await todoAPI.readTodos();

    setTodos(result.data);
  };

  return (
    <VStack mt="75px" spacing="20px" borderRadius="15px" className="todobox">
      <Box my="15px">
        <Heading>The todo crud app...</Heading>
        <Text>total todos: {todos.length}</Text>
      </Box>
      <VStack py="5px" px="10px" borderWidth="1px" mb="25px" ref={inputAreaRef}>
        <Input
          type="text"
          placeholder="title"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
        <Textarea
          type="text"
          placeholder="todo details"
          value={todo.detail}
          onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
        />
        <Input
          type="date"
          value={todo.date}
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
        />
        <Box pt="15px" pb="25px">
          {!edit && (
            <a style={{ cursor: 'pointer' }} onClick={createTodo}>
              submit
            </a>
          )}
          {edit && (
            <a style={{ cursor: 'pointer' }} onClick={updateTodo}>
              update
            </a>
          )}
        </Box>
      </VStack>

      {/* <pre>{JSON.stringify(todo, null, '\t')}</pre> */}

      <Grid pt="20px" pb="100px" templateColumns="repeat(3, 1fr)" gap={10}>
        {todos.map((todo) => (
          <Box
            borderWidth="2px"
            borderRadius="15px"
            py="15px"
            px="50px"
            borderColor="black"
            key={todo.id}
          >
            <HStack justifyContent="space-between" spacing="25px" pb="25px">
              <a
                onClick={() =>
                  editTodo(todo.id, todo.title, todo.detail, todo.date)
                }
              >
                Edit?
              </a>
              <a onClick={() => deleteTodo(todo.id)}>Delete?</a>
            </HStack>
            <VStack>
              <HStack alignItems="center">
                {/* <Text fontFamily="raleway" color="#002fff"> */}
                <Text fontFamily="raleway" fontSize="xl" fontWeight="500">
                  TITLE:
                </Text>
                <Text fontSize="xl">{todo.title}</Text>
              </HStack>
              <HStack>
                <Text fontFamily="raleway" fontSize="xl" fontWeight="500">
                  DATE:
                </Text>
                <Text fontSize="xl">{todo.date}</Text>
              </HStack>
              <HStack>
                <Text fontFamily="raleway" fontSize="xl" fontWeight="500">
                  DETAIL:
                </Text>
                <p>{todo.detail}</p>
              </HStack>
            </VStack>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
}

export default App;
