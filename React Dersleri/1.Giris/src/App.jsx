import { useState } from 'react'
import './App.css'
//*******************************************************/
// JSX Dersi
function App() {
  //Javascript kodları yazılır
  let a = 15;
  const firstName = "Salih";

  let vize1 = 60;
  let vize2 = 30;
  let sonuc = false;

  let isimler = ["Salih", "Anıl", "Hülya", "Semra"]
  return (
    //HTML Kodları yazılır
    <div>
      {/* <p>a değişkeninin değeri :{a}</p>
      <p>Müşterinin adı : {firstName}</p> */}

      {/* <p>Ortalama : {(vize1 + vize2) / 2}</p> */}

      {/* {sonuc ? <p>Ehliyeti aabilirsin</p> : <p>Ehliyet alamazsın, kaybol</p>} */}
      {/* The ternary operator is a simplified conditional operator like if / else.
      Syntax: condition ? <expression if true> : <expression if false> */}

      {
        // (vize1 + vize2) / 2 >= 50 ? <p>Dersten geçtin aferin</p> : <p>Kaldın geçmiş olsun</p>
      }
      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'gray',
            border: '1px solid black'
          }} key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

export default App
