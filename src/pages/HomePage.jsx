
import '../App.css'
import ViewCounter from '../components/ViewCounter'

import { Link } from 'react-router-dom'

function HomePage() {


  return (
    <>
      <h1>home page</h1>
      <ViewCounter/>
      <Link to='/counter'>go to counter page</Link>
    </>
  )
}

export default HomePage
