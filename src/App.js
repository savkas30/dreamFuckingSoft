import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<>home</>} />
        <Route path='/login' element={<>login</>}/>
        <Route path='/register' element={<>register</>}/>
        <Route path='/user' element={<>user</>}/>
        <Route path='/score' element={<>score</>}/>
      </Routes>
    </div>
  );
}

export default App;
