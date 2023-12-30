import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';

import Catalog from './routes/Catalog';

import Header from './components/Header';

export default function App() {
  return(
    <>
        <Header />
          <Catalog />
    </>
)
}