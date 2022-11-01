import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { wrapper } from "../store/store"

import { ThemeMode } from '../styled/themes'

import MainLayout from '../components/layouts/MainLayout'

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <ThemeProvider theme={ThemeMode.light}>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ThemeProvider>
  )
}

export default App