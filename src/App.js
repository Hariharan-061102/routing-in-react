import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepartmentsPage from './pages/DepartmentsPage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/About' element={<AboutPage/>}></Route>
            <Route path='/Departments' element={<DepartmentsPage/>}></Route>
            <Route path='/Event' element={<EventPage/>}></Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
