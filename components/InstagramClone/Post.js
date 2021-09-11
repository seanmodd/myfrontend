import { Heading, Text, Box, VStack, Image } from '@chakra-ui/react';
import React from 'react';

function Post({ postLikes, postURL, postUsername, postDescription }) {
  const API_URL = 'http://localhost:1337';
  const formatImageUrl = (url) => `${API_URL}${url}`;
  return (
    <>
      <VStack my="15px" py="15px">
        <VStack bg="white" borderRadius="10px" w="40%" py="35px">
          <Text fontSize="small">Posted By {postUsername}</Text>
          <Image
            borderRadius="10px"
            width="200px"
            src={formatImageUrl(postURL)}
            alt="post"
          />

          <Box bg="lightgray" py="5px" px="15px" borderRadius="5px">
            <Text fontSize="small">Likes: {postLikes}</Text>
          </Box>
          <Text>{postDescription}</Text>
        </VStack>
      </VStack>
    </>
  );
}

export default Post;

