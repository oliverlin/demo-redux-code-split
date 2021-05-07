import initStore from '../data/createStore'
import { Provider } from 'react-redux'
import { useEffect, useState } from 'react'
import { HYDRATE } from '../constants'

function MyApp({ Component, pageProps }) {
  const preloadedState = pageProps
  // Initial server-side and client side initial render
  const [store] = useState(() => {
    return initStore(preloadedState)
  })

  // Handle server-side props passed in when switching pages
  useEffect(() => {
    const initialState = Object.keys(preloadedState)
    if (initialState.length) {
      store.dispatch({
        type: HYDRATE,
        state: preloadedState
      })
    }
  }, [preloadedState])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
