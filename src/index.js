import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJvtPaOdDX7UW_Noa3V9_EppILUvKFPis",
  authDomain: "ecommerce-test-coder.firebaseapp.com",
  projectId: "ecommerce-test-coder",
  storageBucket: "ecommerce-test-coder.appspot.com",
  messagingSenderId: "767479638067",
  appId: "1:767479638067:web:590a3300fa85af60ec1b46"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);