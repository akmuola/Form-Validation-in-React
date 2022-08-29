import React, { useState }  from 'react'
import axios from 'axios'

export default function Create() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  console.log(firstName, lastName)
  const sendDataToAPI = () => {
      axios.post('https://628e6a74a339dfef87adc885.mockapi.io/Crud', {
        firstName,
        lastName
      })
 }
  return (
    <div>
<form className='form'>
<label>First Name</label><br />
      <input name="fname" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' /><br />
      <label>Last Name</label><br />
      <input name="lname" 
          placeholder='Last Name' 
          onChange={(e) => setLastName(e.target.value)} 
          /><br />
   <button type='submit' onClick={sendDataToAPI}>Submit</button>

</form>
    </div>
  )
}
