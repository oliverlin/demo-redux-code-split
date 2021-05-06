import initStore from '../data/createStore'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'
import { HYDRATE } from '../constants'

function MyApp({ Component, pageProps }) {
  // Initial server-side and client side initial render
  const [store] = useState(() => {
    return initStore({ type: HYDRATE, state: pageProps })
  })

  // Handle server-side props passed in when switching pages
  useEffect(() => {
    const initialState = Object.keys(pageProps)
    if (initialState.length) {
      store.dispatch({
        type: HYDRATE,
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
