import  { useState } from 'react';
import './App.css';



function Content({children}) {
  return(
    <div className='content'>
      {children}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(1)
  const [isLoggeIn, setIsLoggenIn] = useState(false);

  return (
    <>
    <Content>
      <h1>Alışveriş Uygulaması</h1>
    </Content>

    <hr/>
 
       <div className='contanier'>
        <h2>ÜRÜNLER</h2>
        <img className='ikon' src="/src/assets/sepet-icon.svg" alt="" />
        <div className='conten'>
          <a href="" >
            <img src="/src/assets/based.jpg" alt="" className='photo' />
            <h4>Beyaz Crealive Sweatshirt </h4>
            <p>Fiyat: <br /> 250₺</p>
            <button className='sepetEkle'  onClick={() => setCount((count) => count + 0)}>Sepete Ekle {count}</button>
          </a>
          <a href="" >
            <img src="/src/assets/batik.jpg" alt='' className='photo' />
            <h4>Gri Beyaz Batik Sweatshirt </h4>
            <p>Fiyat: <br /> 180₺</p>
            <button className='sepetEkle'  onClick={() => setCount((count) => count + 0)}>Sepete Ekle {count}</button>
          </a>
          <a href="" >
            <img src="/src/assets/beyaz.jpg" alt="" className='photo' />
            <h4>Beyaz Kadın Worst Sweatshirt </h4>
            <p>Fiyat: <br /> 200₺</p>
            <button className='sepetEkle'  onClick={() => setCount((count) => count + 0)}>Sepete Ekle{count}</button>
          </a>
        </div>
        <div className='conten'>
          <a href="" >
            <img src="/src/assets/gap.jpg" alt="" className='photo' />
            <h4>Gap Su Yeşili Kadın Sweatshirt </h4>
            <p>Fiyat: <br /> 350₺</p>
            <button className='sepetEkle'  onClick={() => setCount((count) => count + 0)}>Sepete Ekle {count}</button>
          </a>
          <a href="" >
            <img src="/src/assets/maci.jpg" alt="" className='photo' />
            <h4>Mavi Erkek Sweatshirt </h4>
            <p>Fiyat: <br /> 250₺</p>
            <button className='sepetEkle'  onClick={() => setCount((count) => count + 0)}>Sepete Ekle {count}</button>
          </a>
          <a href="" >
            <img src="/src/assets/mavi.jpg" alt="" className='photo' />
            <h4>Mavi Kadın Sweatshirt </h4>
            <p>Fiyat: <br /> 280₺</p>
            <button className='sepetEkle' onClick={() => setCount((count) => count + 0)}>Sepete Ekle {count}</button>
          </a>
        </div>
        <div className='conten'>
          <a href="" >
            <img src="/src/assets/mint.jpg" alt="" className='photo' />
            <h4>Mint Erkek Sweatshirt </h4>
            <p>Fiyat: <br /> 250₺</p>
            <button className='sepetEkle'  onClick={() => setCount((count) => count + 0)}>Sepete Ekle {count}</button>
          </a>
          <a href="" >
            <img src="/src/assets/stock.jpg" alt="" className='photo' />
            <h4>Stockholm Sweatshirt </h4>
            <p>Fiyat: <br /> 250₺</p>
            <button className='sepetEkle'  onClick={() => setCount((count) => count + 0)}>Sepete Ekle {count}</button>
          </a>
          <a href="" >
            <img src="/src/assets/sweat.jpg" alt="" className='photo' />
            <h4>Wrtsbhvr Sweatshirt </h4>
            <p>Fiyat: <br /> 280₺</p>
            <button className='sepetEkle'  onClick={() => setCount((count) => count + 0)}>Sepete Ekle {count}</button>
          </a>
        </div>
        
      </div>

      <footer className="app-footer">
          <div className="footer">
          <h3 className="app-name">Nildem Ertürk Butik </h3>
          <ul className="icons">
            <li>
              <a href="https://www.youtube.com" target="_blank">
                <img src="/src/assets/YouTube.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src="/src/assets/instagram.svg" alt="" />
              </a>
            </li>
          </ul> <br />
        
        </div>
        
  </footer>
  <p className="read-the-docs">
            Bütün Hakları Saklıdır.
          </p>
    </>
  )
}

export default App
