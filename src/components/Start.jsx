import { useRef } from "react"

export default function Start({setUsername}) {

    // Ref for input
    const inputRef = useRef();

    // function to handle click
    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    }
  return (
    <div className="start">
        <h1>Welcome to Insight Consultings, Who wants to be a millionaire</h1>
        <input type="text" placeholder="Enter your name" className="startInput" ref={inputRef}/>
        <button className="startButton" onClick={() => handleClick()}>Start</button>
        
    </div>
  )
}
