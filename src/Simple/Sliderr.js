import React from 'react';
import styled from 'styled-components';

function SliderComp ({value,handleChange, min,max,step}){
    return (
    <div>
        <input  type="range" defaultValue={value} onChange={handleChange}
        min={min}
        max={max}
        step={step} />
    </div>
   

    );
}

export default SliderComp;
// export const Container = styled.div`
//     display: grid;
//     place-items: center;
//     margin-left: 10px;
// `;


// export const Slider =styled.input`
// -webkit-appearance: none;
// width:500px;
// `;