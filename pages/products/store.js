import Link from 'next/link';
import { Heading, VStack, HStack } from '@chakra-ui/layout';
import React from 'react';

import { Image } from '@chakra-ui/image';
import { fromImageToUrl, API_URL } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';

export default function App({ products }) {
  console.log(products);
  return (
    <VStack mt="50px">
      <Heading>Welcome to the Store</Heading>
      <HStack spacing="100px" pt="50px">
        {products.map((product) => (
          <Link href={`/products/${product.slug}`}>
            <a>
              <VStack key={product.id}>
                <div>{product.title}</div>
                <div>${twoDecimals(product.price)}</div>
                <Image w="200px" src={fromImageToUrl(product.image)} />
              </VStack>
            </a>
          </Link>
        ))}
      </HStack>
    </VStack>
  );
}

export async function getStaticProps() {
  // Fetch the products
  const product_res = await fetch(`${API_URL}/products/`);
  const products = await product_res.json();
  return {
    props: {
      products,
    },
  };
}
