import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
// import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import LoginRegisterForm from '../components/LoginRegisterForm';
import firebase from '../firebase';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('ryanstripebuyer@gmail.com');
  const [loginPass, setLoginPass] = useState('rrrrrr');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPass, setRegisterPass] = useState('');
  const router = useRouter();

  const register = async () => {
    // console.log(registerEmail, registerPass);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(registerEmail, registerPass)
      .then((user) => {
        console.log('REGISTER', user);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
      });
  };

  const login = async () => {
    // console.log(loginEmail, loginPass);
    await firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginPass)
      .then((user) => {
        console.log('LOGIN', user);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
      });
  };

  const googleLogin = async () => {
    await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        console.log('LOGIN', user);
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login / Register</h2>
      <Button
        onClick={googleLogin}
        variant="outline"
        textShadow="1px 1px 1px #8d8d8d75"
        leftIcon={<Box as={FaGoogle} color="red.500" />}
      >
        Login with Google
      </Button>

      <div className="row">
        <LoginRegisterForm
          email={loginEmail}
          setEmail={setLoginEmail}
          pass={loginPass}
          setPass={setLoginPass}
          handleSubmit={login}
          buttonName="Login"
        />

        <LoginRegisterForm
          email={registerEmail}
          setEmail={setRegisterEmail}
          pass={registerPass}
          setPass={setRegisterPass}
          handleSubmit={register}
          buttonName="Register"
        />
      </div>
    </div>
  );
};

export default Login;
