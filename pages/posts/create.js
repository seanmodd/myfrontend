import {
  Heading,
  Textarea,
  Text,
  Box,
  VStack,
  Image,
  Input,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { postData } from '../../postData';
import Post from '../../components/InstagramClone/Post';

function CreatePost() {
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('TestAccount');
  const [likes, setLikes] = useState('0');
  const [image, setImage] = useState(
    '/uploads/small_Naked_and_Famous_d4d792a09b.jpg?87498.20000000298'
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:1337/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description,
        username,
        likes,
        image,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <Heading pb="20px">Create Post</Heading>
      <Link href="/posts">
        <a>Go Back</a>
      </Link>
      <VStack spacing={8} borderRadius="10px" px="0px" mt="25px">
        <VStack w="40%" borderRadius="5px" py="25px" bg="white">
          <form onSubmit={handleSubmit}>
            <Textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description"
              w="75%"
            />
            <button type="submit" style={{ backgroundColor: '#f3f3f3' }}>
              Submit
            </button>
          </form>
        </VStack>
      </VStack>
    </div>
  );
}

export default CreatePost;
