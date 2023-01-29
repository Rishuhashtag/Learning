import React from 'react';
import styled from 'styled-components';

function SliderRate ({value1,handleChange, min,max,step}){
    return (
    <div>
        <input  type="range" defaultValue={value1} onChange={handleChange}
        min={min}
        max={max}
        step={step} />
    </div>
   

    );
}

export default SliderRate;