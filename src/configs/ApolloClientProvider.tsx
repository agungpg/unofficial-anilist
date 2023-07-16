'use client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
})
export default function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
