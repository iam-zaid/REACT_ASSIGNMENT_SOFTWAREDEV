import './App.css';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity'
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='my-city' element={<MyCity/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
