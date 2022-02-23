import React from 'react';

const NumbersTable = ({ limit }) => {
    const numbersArray = [];
    for (let i = 0; i < limit; i++) {
        numbersArray.push(

            <div style={{
                 backgroundColor: `${i % 2 === 0 ? 'red' : 'white'}`,
                 border: '1px solid black',
                 margin: '0',
                 width: '25px',
                 heigth: '25px',
            }}
            >
                {i}
            </div>
        );
    }

    return <div><span>{numbersArray.map((n) => n)}</span></div>;
}

export default NumbersTable;