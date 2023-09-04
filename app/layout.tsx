'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './store'
import { PageLayout } from '../components/PageLayout'

const queryClient = new QueryClient()
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <PageLayout>{children}</PageLayout>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}
