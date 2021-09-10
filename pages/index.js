import Head from 'next/head';
import { Text } from '@chakra-ui/layout';
import React, { useContext } from 'react';
import MyHeader from '../components/MyHeader';
import { Context } from '../context';
import Directory from '../components/Directory/Directory';

function App() {
  const { state } = useContext(Context);

  return (
    <div>
      <Text>Let's buy stuff</Text>
      {JSON.stringify(state)}
    </div>
  );
}

export default App;
