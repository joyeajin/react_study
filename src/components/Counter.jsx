import React, { useState } from 'react';

function Counter() {
    let [num, setNum] = useState(0);
    const count = () => {
        setNum(num+1);
    }
    return (
        <div className='counter'>
            <span className="number">{num}</span>
            <button className="button" onClick={count}>Add +</button>
        </div>
    );
}

export default Counter;