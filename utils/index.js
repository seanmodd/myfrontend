import axios from 'axios';

const url = 'http://localhost:1337/todos';

export const readTodos = () => axios.get(url);
export const createTodo = newTodo => axios.post(url, newTodo);
export const updateTodo = (id, updatedTodo) => axios.put(`${url}/${id}`, updatedTodo);
export const deleteTodo = id => axios.delete(`${url}/${id}`);

