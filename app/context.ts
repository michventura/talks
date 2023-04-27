import * as React from 'react'

const AppContext = React.createContext({})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [prefetch, setPrefetch] = React.useState('none')
  const context = { prefetch, setPrefetch }
  return React.createElement(AppContext.Provider, { value: context, children })
}

export function usePrefetch() {
  // @ts-ignore
  const { prefetch, setPrefetch } = React.useContext(AppContext) || {}
  return { prefetch, setPrefetch }
}
