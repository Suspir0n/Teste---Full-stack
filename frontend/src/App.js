import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewPeople from './pages/NewPeople';
import EditPeople from './pages/EditPeople';
import DeletePeople from './pages/DeletePeople';

function App() {
  return (
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newpeople' element={<NewPeople/>} />
        <Route path='/editpeople/:id' element={<EditPeople/>} />
         <Route path='/deletepeople/:id' element={<DeletePeople/>} />
      </Routes>
    </Router>
  );
}

export default App;
