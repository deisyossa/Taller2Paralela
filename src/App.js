import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gain from './components/Gain';
import Home from './components/Home'
import Provider from './providers/StateProvider';

function App() {
  return (
    <Provider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/jugador/partida/:id' element={<Gain/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
