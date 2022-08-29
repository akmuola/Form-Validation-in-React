import React, {useState, useRef}from 'react'

export default function UseRef() {

  const [randomInput, setRandomInput] = useState('')
  const handleChange = (e) =>{
  setRandomInput(e.target.value)
  renders.current++;
  }
  const focusOnInput = () =>{
    inputRef.current.focus()
  }

  const renders = useRef(0)
  const inputRef = useRef()

  return (
    <div>
      <main>
<input type="text" 
ref={inputRef}
value={randomInput}
placeholder='Random Input'
onChange={handleChange}
/>
<p>Renders: {renders.current}</p>
<br /><br />
<button onClick={focusOnInput}>Focus</button>
<br /><br />
<p>{randomInput}</p>
      </main>
    </div>
  )
}
