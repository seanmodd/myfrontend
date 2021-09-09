import {
  Box,
  Badge,
  Text,
  Flex,
  Heading,
  VStack,
  Image,
} from '@chakra-ui/layout';
import { StarIcon } from '@chakra-ui/icons';
import React from 'react';
import MyHeader from 'components/MyHeader';
import UserInfo from 'components/Profile/UserInfo';

function App() {
  return (
    <>
      <Box mt="100px">
        <VStack>
          <Heading>PROFILE PAGE</Heading>
        </VStack>
        <Box py="25px">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Box>
      </Box>
      <Box>
        <Box ml="3">
          <Text fontWeight="Normal">
            (Insert Name)
            <Badge ml="2.5">STATUS:</Badge>
            <Badge ml="" colorScheme="blue">
              New
            </Badge>
          </Text>
        </Box>
        <UserInfo />
        <Text>Email: (Insert Email)</Text>
        <Text>Bio: (Insert Bio)</Text>
        <Text>ToDos Created: (Insert ToDo Count)</Text>
        <Text>Items in Cart: (Insert Items In Cart)</Text>
      </Box>
    </>
  );
}

export default App;
