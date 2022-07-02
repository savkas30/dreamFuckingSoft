import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './page/home/Home';
import { Login } from './page/login/Login';
import { Register } from './page/register/Register';
import { Score } from './page/score/Score';
import { User } from './page/user/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/score' element={<Score/>}/>
      </Routes>
    </div>
  );
}

export default App;
