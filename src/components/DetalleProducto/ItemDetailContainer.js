import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';


import { useEffect, useState, } from 'react'
import { getFirestore, doc, getDoc, } from 'firebase/firestore';

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { modelo } = useParams()
    const [productDetail, setProductoDetail] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const itemRef = doc(db, 'items', modelo);
            getDoc(itemRef).then((snapshot) => setProductoDetail({id: snapshot.id, ...snapshot.data()})
            );
    }, [modelo])

    return (
        <div className='containerDetail'>
            <div className=''>
                
                {productDetail.length === 0 ? (
                <div>Cargando...</div>
                ) : (
                    <div>
                        <ItemDetail productDetail = {productDetail} />
                        
                    </div>
                )}
            </div>
                    

        </div>
    
    )
}

export default ItemDetailContainer


