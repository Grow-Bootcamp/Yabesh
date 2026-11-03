import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import  { Provider } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css'
import './index.css'

import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { TodoProvider } from './context/TodoContext.tsx';
import { store } from './store/store.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <TodoProvider>
            <App />
            <ToastContainer position="top-right" autoClose={3000} />
          </TodoProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
