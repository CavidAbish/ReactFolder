import './App.css';
import Home from './Componenets/Home';
import About1 from './Componenets/About1';
import WorkExample from './Componenets/WorkExample';
import WithContact from './Componenets/WithContact';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="Navlink">
      <NavLink to='/'>Home  </NavLink>
        <NavLink to='/About1'> About</NavLink>
        <NavLink to='/WithContact'> With Contact  </NavLink>
        <NavLink to='/WorkExample'>  Work Example</NavLink>
      </div>
      <div className='routes'>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/About1' element={<About1 />} />
          <Route path='/WithContact' element={<WithContact />} />
          <Route path='/WorkExample' element={<WorkExample />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

