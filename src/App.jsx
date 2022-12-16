import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import FixedList from './components/FixedList';
import VariableList from './components/VariableList';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list' element={<List />}>
        <Route path='fixed' element={<FixedList />} />
        <Route path='variable' element={<VariableList />} />
      </Route>
    </Routes>
  );
}

export default App;
