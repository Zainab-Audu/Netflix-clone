import Index from './pages/Home/Index';
import Home from
  './pages/Home/Home'
import Login from '../src/pages/Login/Login'
import { Routes, Route} from 'react-router-dom';
import Player from './pages/Player/Player';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
