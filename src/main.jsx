import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import Banner from './Components/Banner';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header'
import './Styling/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
