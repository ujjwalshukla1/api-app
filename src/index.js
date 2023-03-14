import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasicExample from './components/nav';
import GridComplexExample from './components/form';
import BodyShorthandExample from './components/explorer';
import ImgOverlay from './components/plus';
import Basic from './components/aventures';
import Example from './components/entier';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BasicExample/>
  <App/>
  <GridComplexExample/>
  <BodyShorthandExample/>
  <ImgOverlay/>
  <Basic/>
  <Example/>
  </div>
);


