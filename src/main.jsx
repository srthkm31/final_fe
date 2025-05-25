import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='614393291208-24qfm2t6e1btm90f52trk785u9jj335i.apps.googleusercontent.com'>
  
    <App />
  
  </GoogleOAuthProvider>
  ,
)
