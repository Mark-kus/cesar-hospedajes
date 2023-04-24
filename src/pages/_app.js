import 'styles/globals.css'
import { Provider } from 'react-redux'
import { wrapper } from 'redux/store';
import Layout from 'components/Layout.';

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
