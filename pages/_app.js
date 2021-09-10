import { Provider as AuthProvider } from 'next-auth/client';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'context';
import { theme } from '../styles/theme';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import { wrapper } from '../store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import FirebaseAuthState from '../components/FirebaseAuthState';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider>
        <PersistGate loading={null} persistor={store.__persistor}>
          <FirebaseAuthState>
            <AuthProvider session={pageProps.session}>
              <Layout {...pageProps}>
                <ToastContainer />
                <Component {...pageProps} />
              </Layout>
            </AuthProvider>
          </FirebaseAuthState>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
