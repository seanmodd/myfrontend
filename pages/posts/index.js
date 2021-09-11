import { Heading, Text, Box, VStack, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { postData } from '../../postData';
import Post from '../../components/InstagramClone/Post';

function InstagramPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:1337/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Heading pb="20px">Instagram Clone</Heading>
      <Link href="/posts/create">
        <a>Create New Post</a>
      </Link>
      {posts.map((post) => (
        <Post
          key={post.id}
          postUsername={post.users.username}
          postURL={post.image.url}
          postLikes={post.likes}
          postDescription={post.description}
        />
      ))}
    </div>
  );
}

export default InstagramPosts;
