import { useEffect, useState } from "react"
import { renderMatches } from "react-router-dom"

// function Test(){
//     const [count, setCount] = useState(0)
//     let noCount = 0
    
//     const countUp=()=>{
//         setCount(count + 1)
//         console.log(count)
//     }
//     const [func, setFunc] = useState(()=>{
//         const initialState = someEx(props)
//         return initialState
//     })

//     return (
//         <div>
//             <h1>useState {count}</h1>
//             <h1>not useState {noCount}</h1>
//             <button onClick={countUp}>click!</button>
//         </div>
//     )
// }


function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    return (
      <>
        Count: {count}
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(w => w - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
    );
  }


export default Counter