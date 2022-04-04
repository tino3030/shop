import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import ProductScreen from './screen/ProductScreen';
import HomeScreen from './screen/HomeScreen';




function App() {
  return (
   <BrowserRouter>
    <div className="grid-container">
 
    <header className="row">
      <div>
        <a className="brand" href="/">
          LeShop
          </a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
      <Route  path="/produits/:id" component={ProductScreen} />
     
      <Route  path="/" component={HomeScreen}  exact/>
    </main>
  

    <footer className="row center">Tout Droit Réservé</footer>
    </div>
  </BrowserRouter> 
 
  );
}

export default App;
