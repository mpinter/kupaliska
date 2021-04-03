import dynamic from 'next/dynamic'
import React from 'react'

const AdminWithNoSSR = dynamic(() => import('../components/Admin'), {
  ssr: false,
})

const App = () => <AdminWithNoSSR />

export default App
