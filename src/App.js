
import './App.css';
import { Footer } from './componentes/landing/Footer';
import { Header } from './componentes/landing/Header';
import { Home } from './componentes/landing/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { Inscribete } from './componentes/landing/Inscribete';
import { ComoFunciona } from './componentes/landing/ComoFunciona';
import { Host } from './componentes/landing/Host';
import { Petsparents } from './componentes/landing/Petsparents';
import { Equipo } from './componentes/landing/Equipo';
import { Contactanos } from './componentes/landing/Contactanos';
import { Faq } from './componentes/landing/Faq';
function App() {
  return (
    <>
      
      <BrowserRouter>
      <Header/>
      <main id="main">
        <section>
        
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/comofunciona" element={<ComoFunciona/>}></Route>
        <Route exact path="/host" element={<Host/>}></Route>
        <Route exact path="/petsparents" element={<Petsparents/>}></Route>
        <Route exact path="/faq" element={<Faq/>}></Route>
        
        <Route exact path="/equipo" element={<Equipo/>}></Route>
        <Route exact path="/contactanos" element={<Contactanos/>}></Route>
        
        <Route exact path="/Inscribete" element={<Inscribete/>}></Route>
        
        </Routes>
        
        </section>
    
    
    </main>
        <Footer/>
      </BrowserRouter>
      
     
      
      
    </>
  );
}

export default App;
