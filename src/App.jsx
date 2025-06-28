import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto.jsx';

function App() {

  return (
    <BrowserRouter basename='/Gestion-de-contactos-proyecto-final-Grupo3'>
      <Routes>
        <Route path="/" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
     )
}

export default App
