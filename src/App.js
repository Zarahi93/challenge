import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/postList';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />}>
    <Route path='/' element={ <Posts /> } /> 
    </Route>
  </Routes>
  )
}

export default App;
