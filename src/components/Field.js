import React from 'react'

function Field( { value , onChange}) {
  return (
    <div>
        
        <label>Enter English</label>
        <input
            type='text' 
            value={value}
            onChange={ (e) => onChange(e.target.value)}
        />
    </div>
  )
}

export default Field