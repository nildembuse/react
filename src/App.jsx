import  { useState } from 'react';
import './App.css';
import productsData from './data/product';

function App() {
  const [products, setProducts] = useState(productsData);

    const updatedProducts = products.map((p) => {
      if (p.id === id && p.stock > 0) {
        return {
          ...p,
          stock: p.stock - 1,
        };
      }
      return p;
    });
    setProducts(updatedProducts);

  const updateProductStock = (productId, newStock) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          stock: newStock,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <>
    <div className="contanier">

      <div className="conten">
        <h2>Ürünler</h2>
        <div className="photo">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToBasket={addToBasket}
              updateProductStock={updateProductStock}/>
          ))}
        </div>
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
  );
}

export default App;