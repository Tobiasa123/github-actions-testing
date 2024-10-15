import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router basename="/github-actions-testing">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/counter' element={<CounterPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
