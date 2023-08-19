import { useEffect, useState } from 'react';
import './Style.css';
const ProgressBar = ({ value = 0 }) => {

   const [percernt,setPercent]=useState(value)
   useEffect(()=>{
    setPercent(Math.min(100,Math.max(value,0)))
   },[value])
    return (
        <>
            <div className='app'>
                <div className='progress'>
                    <span> {percernt.toFixed()}</span>
                    <div style={{width:`${percernt}%`}}/>
                </div>
            </div>

        </>
    );
}

export default ProgressBar;
