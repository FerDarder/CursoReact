import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailCointainer from './Components/ItemDetailCointainer';
import Cart from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import CartContextProvider from './Components/CartContextProvider';


export default function App() {


  return (
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route 
                  path="/category/:categoryId" 
                  element={<ItemListContainer/>} 
                  />
                <Route path="/item/:id" element={<ItemDetailCointainer/>} />
                <Route path="/cart" element={<Cart/>} />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>


  )
}


