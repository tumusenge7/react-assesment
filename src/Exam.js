import React, { useState } from 'react'

function Exam() {
    const [name, setName] = useState('')
    const [after, setAfter] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setAfter(name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='bg-blue-300'>Exam Page</h1>
                <label>enter your name</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoFocus />

                <button type="submit" className='bg-gray-500 ml-2 rounded'>OK</button>
            </form>


            <p>my name is: {after}</p>
        </div>
    )
}

export default Exam