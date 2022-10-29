import './CountDetail.css';

import { useState, useEffect  } from 'react';

const CountDetail = ({initial, stock, onAdd}) =>{

    const [number, setNumber] = useState(parseInt(initial))
    
    const decrease = () => {
        setNumber(number - 1);
    };
    
    const increases = () => {
        setNumber(number + 1);
    };

    useEffect(() => {
        setNumber(parseInt(initial));
    
    }, [initial])
    

    return(
        
            <div className='count'>
                <button disabled = {number <= initial} onClick={decrease}>-</button>
                <span className='numCount'>{number}</span>
                <button disabled = {number >= stock} onClick={increases}>+</button>
                <div>
                    <button disabled={stock <= 0} onClick={() => onAdd(number)}>Agregar</button>
                </div>
            </div>
    )
}

export default CountDetail;