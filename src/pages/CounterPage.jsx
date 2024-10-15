import { increment, decrement } from '../reducers/counterReducer'
import { useDispatch } from 'react-redux'
import '../App.css'
import ViewCounter from '../components/ViewCounter'
import { Link } from 'react-router-dom'
function CounterPage() {

  const dispatch = useDispatch()
    
  function handleIncrease(){
    dispatch(increment(1))
  }
  function handleDecrease(){
    dispatch(decrement(1))
  }


  return (
    <>
      <h1>counter</h1>
      <Link to='/'>go to home page</Link>
      <ViewCounter/>
      <section>
          <button onClick={handleIncrease}>increase</button>
          <button onClick={handleDecrease}>decrease</button>
      </section>
    </>
  )
}

export default CounterPage
