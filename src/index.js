import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemListContainer from './Components/Landing/ItemListContainer';
import Landing from './Components/Landing/Landing';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Landing />
      <div>
        <ItemListContainer greeting={'No art available yet'} />
      </div>
    </>
  </React.StrictMode>
);