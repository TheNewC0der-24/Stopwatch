import React from 'react';

const Btn = () => {
    return (
        <div>
            <button
                className='stopwatch-btn stopwatch-btn-gre'
                onClick={props.start}
            >
                Start
            </button>
        </div>
    )
}

export default Btn;