import React, { useState } from 'react';
import './district.css';

const District = (props) => {
    const [power, setPower] = useState(1);
    const boostPower = () => setPower(power * 2);
    return (
        <div className='districtContainer'>
            <div className="districtBody">
                <h2> Name: {props.name}</h2>
                <p> Specialty: {props.special}</p>
                <h1>Power: {power}</h1>
                <button onClick={boostPower} className='btn'>Boost the Power</button>
            </div>
        </div>
    );
};

export default District;