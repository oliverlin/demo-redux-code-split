import store from '../data/createStore'
import { Provider } from 'react-redux'
import '../data/currentUser'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const initialState = Object.keys(pageProps)
    if (initialState.length) {
      store.dispatch({
        type: 'HYDRATE',
        state: pageProps
      })
    }
  }, [pageProps])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
