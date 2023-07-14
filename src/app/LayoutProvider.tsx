'use client'
import ApolloClientProvider from '@/configs/ApolloClientProvider'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/store/index'

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
