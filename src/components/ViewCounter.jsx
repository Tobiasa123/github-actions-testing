import { useSelector } from "react-redux"

function ViewCounter() {

    const counter = useSelector((state)=>{
        return state.counter;
    })

  return (
    <>
      <h2>Counter is at: {counter}</h2>
    </>
  )
}

export default ViewCounter;
