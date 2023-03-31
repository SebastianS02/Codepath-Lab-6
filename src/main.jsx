import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Layout from '../routes/Layout';
import DetailView from '../routes/DetailView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
      <Route path="*" element={
        <main>
          <h3>Error 404: Page Not Found</h3>
          <Link to="/">
            Back to Home
          </Link>
        </main>
       } />
      </Route>
    </Routes>
  </BrowserRouter>
)
