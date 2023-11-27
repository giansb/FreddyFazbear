import logo from './logo.svg';
import './App.css';
import HomePage from './components/pages/home_page';
import MenuPage from './components/pages/menu_page';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './components/pages/contact_page';



function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route path="cardapio" element= {<MenuPage/>}></Route>
      <Route path="contato" element = {<ContactPage/>}></Route>
    </Routes>
  );
}

export default App;
