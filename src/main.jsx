import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRouter'
import AuthProvider from './providers/AuthProvider'


const queryClient = new QueryClient()



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
