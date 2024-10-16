import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/github-actions-testing';

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/counter' element={<CounterPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
