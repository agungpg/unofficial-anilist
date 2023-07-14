'use client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import ApolloClientProvider from '@/configs/ApolloClientProvider'
import { persistor,store } from '@/store/index'

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <ApolloClientProvider>{children}</ApolloClientProvider>
      </PersistGate>
    </Provider>
  )
}
