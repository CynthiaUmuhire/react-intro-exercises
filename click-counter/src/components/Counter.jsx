import { useState } from "react"

const Counter = ({name}) => {
    const[count,setCount] = useState(0)

    return (
        <>
        <span> Button was clicked : {count} times</span>
            <button className="p-2 border bg-slate-400 w-20" onClick={() =>setCount((prev)=> prev+1)}>
                <p>{name}</p>
            </button>
        </>
    )
}

export default Counter