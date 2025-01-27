import Home from
  './pages/Home/Home'
import Navbar from '../src/componenets/Navbar/Navbar'
import Login from  './pages/Login/Login'
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
