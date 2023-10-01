import { useState } from "react"

const Form = () => {
    const [names,setNames] = useState({
        fName:"",
        lName:""
    });
    const handleFnameChange = (e)=>{
        setNames((prev) => {
            return {
                ...prev,
                fName:e.target.value
            }
        })
    }
    const handleLnameChange = (e) => {
        console.log(e.target.value);
        setNames((prev) => {
            return {
                ...prev,
                lName:e.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Hello "+ names.fName +" "+names.lName)
    }
  return (
    <form className=" flex flex-col gap-3 items-center justify-center ">
      <input type="text" value={names.fName} onChange={handleFnameChange} className="p-2 text-left border rounded-lg "/>
      <input type="text" value={names.lName} onChange={handleLnameChange} className="p-2 text-left border rounded-lg "/>
      <button className="bg-pink-950 rounded-lg border shadow-xl p-2 text-center text-white" onClick={handleSubmit}> Greet me</button>
    </form>
  )
}

export default Form
