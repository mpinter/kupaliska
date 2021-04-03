// needs to be a dynamic import with no-ssr, since react-admin breaks when rendered server-side
// this should also ensure that clients visiting the page don't need to load any of react-admin dependencies (i.e. material-ui)
import cookie from 'js-cookie'
import buildHasuraProvider from 'ra-data-hasura'
import React, { useEffect, useState } from 'react'
import { Admin, fetchUtils } from 'react-admin'
import authProvider from '../utils/authProvider'

// TODO not working, for other time

const httpClient = (url, options = {}) => {
  if (!options['headers']) {
    options['headers'] = new Headers({ Accept: 'application/json' })
  }
  // add your own headers here
  options['headers'].set('X-Hasura-Admin-Secret', cookie.get('admin-header'))
  return fetchUtils.fetchJson(url, options)
}

const App = () => {
  const [dataProvider, setDataProvider] = useState(null)

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: { uri: 'https://quality-penguin-55.hasura.app' },
      })
      setDataProvider(() => dataProvider)
    }
    buildDataProvider()
  }, [])

  if (!dataProvider) return <p>Loading...</p>
  return <Admin dataProvider={dataProvider} authProvider={authProvider} />
}

export default App
