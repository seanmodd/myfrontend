import { Image } from '@chakra-ui/image';
import { Box, Heading, VStack } from '@chakra-ui/layout';
import React from 'react';
import { fromImageToUrl, API_URL } from '../../utils/urls';

const Product = ({ product }) => (
  <VStack pt="100px">
    <Heading>{product.title}</Heading>
    <Image w="200px" src={fromImageToUrl(product.image)} alt={product.name} />
    <Heading>${product.price}</Heading>
    <Box w="400px">
      <p>{product.description}</p>
    </Box>
  </VStack>
);

export async function getStaticProps({ params: { slug } }) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_res.json();

  return {
    props: {
      product: found[0],
    },
  };
}

export async function getStaticPaths() {
  // Retrieve all possible paths
  const product_res = await fetch(`${API_URL}/products`);
  const products = await product_res.json();

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));
  // Return them to Nextjs context
  return { paths, fallback: false };
}

export default Product;
