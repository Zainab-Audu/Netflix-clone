import Home from
  './pages/Home/Home'
import Login from '../src/pages/Login/Login'
import { Routes, Route} from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

    </div>
  );
};

export default App;
