import React,{useRef} from 'react'

export default function UseRefOne() {
  const myRef = useRef(0)
    const inputRef = useRef(null)
  
    const focusInput = () => {
      inputRef.current.focus()
    }
  
console.log(myRef)
  return (
    <div>
      <h1>UseRef Tutorial</h1><br />
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus on the Input</button>
    </div>
  )
}
