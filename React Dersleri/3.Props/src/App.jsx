import { useState } from 'react'
import Product from './Product'
import './App.css'
import Container from './Container';

function App() {
  //  const productName = "Buzdolabı";

  return (

    <div>
      {/* <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantolon" price={950} /> <br />
      <Product productName={productName} price={20000} TL /> */}
      <Container>
        <br />
        <Product productName="Telefon" price={30000} />
        <Product />
      </Container>
    </div>
  )
}

export default App
