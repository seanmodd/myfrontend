import { Heading } from '@chakra-ui/react';
import React from 'react';
import { postData } from '../../postData';

function InstagramPosts() {
  const { url } = postData;
  const { description } = postData;
  const { image } = postData;
  const { likes } = postData;
  console.log('LIKES: ', likes);
  return (
    <div>
      <Heading>Instagram Clone</Heading>
    </div>
  );
}

export default InstagramPosts;
