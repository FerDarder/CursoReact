import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailCointainer from './Components/ItemDetailCointainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 


export default function App() {


  return (
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route 
                  path="/category/:categoryId" 
                  element={<ItemListContainer/>} 
                />
                <Route path="/item/:id" element={<ItemDetailCointainer/>} 
                />
              </Routes>
          </BrowserRouter>


  )
}


