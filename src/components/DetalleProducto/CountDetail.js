import './CountDetail.css';

import { useState } from 'react';

const CountDetail = () =>{

    const [numero, setNumero] = useState(0)
    
    let stock = 10
    const disminuye = () => {
        setNumero(numero - 1);
    };
    
    const aumenta = () => {
        setNumero(numero + 1);
    };

    return(
        
            <div className='count'>
                <button disabled = {numero <= 0} onClick={disminuye}>-</button>
                <p className='numCount'>{numero}</p>
                <button disabled = {numero >= stock} onClick={aumenta}>+</button>
            </div>
    )
}

export default CountDetail;