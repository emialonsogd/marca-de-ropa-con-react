import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
      {/*<ItemCount stock={6} nombreDelProducto="Playera" />
      <ItemCount stock={4} nombreDelProducto="Pantalon" />
      <ItemCount stock={8} nombreDelProducto="Sudadera" /> */}
    </>
  );
};

export default App;
