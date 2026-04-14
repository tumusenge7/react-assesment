import React, { useState } from 'react'

function Aboutus() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Likes:{count}</p>
            <button onClick={(() => setCount(count + 1))} className='bg-blue-700 rounded text-white'> click to like</button>
        </div>
    )
}

export default Aboutus