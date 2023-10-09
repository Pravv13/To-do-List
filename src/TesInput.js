import React, {useState} from 'react'

function TesInput() {
  const [names, setNames] = useState('')
  const [gender, setGender] = useState('')
  const [quotes, setQuotes] = useState('')
  const [formData, setFormData] = useState({})


  return (
    <div>
        <p>Name:</p>
        <input type='text' value={names} onChange={(e) => setNames(e.target.value)}/><br></br>

        <p>Gender:</p>
        <input name="gender" type='radio' id='male' value="male" onClick={() => setGender("male")}/>
        <label for='css'>Male</label><br></br>
        <input name="gender" type='radio' id='female' value="female" onClick={() => setGender("female")}/>
        <label for='css'>Female</label>
        <br></br>

        <p>Input Quotes:</p>
        <input type='text' value={quotes} onChange={(e) => setQuotes(e.target.value)}/><br></br>

        <button onClick={() => {
            setFormData({names, gender, quotes})
            setArrayData([names, gender, quotes])
        }}
        >Simpan</button><br></br>

        <p>Name: {formData?.names}</p>
        <p>Gender: {formData?.gender}</p>
        <p>quotes: {formData?.quotes}</p>
    </div>
  )
}

export default TesInput
