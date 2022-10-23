import './ItemDetailContainer.css';
import CountDetail from './CountDetail';

import { useEffect, useState, useContext } from 'react'
import { getFirestore, doc, getDoc, } from 'firebase/firestore';

import { useParams } from 'react-router-dom'
import {CartContext} from '../../contexts/CartContext';

const ItemDetailContainer = () => {
    const { modelo } = useParams()
    const [productoDetail, setProductoDetail] = useState({})
    const {cart} = useContext(CartContext);


    useEffect(() => {
        const db = getFirestore()
        const itemRef = doc(db, 'items', modelo);
            getDoc(itemRef).then((snapshot) => setProductoDetail({id: snapshot.id, ...snapshot.data()})
            );
    }, [modelo])

    return (
        <div className='containerDetail'>
            <div className=''>
                {productoDetail.length === 0 ? (
                <div>Cargando...</div>
                ) : (
                    <article key={productoDetail.id} className="cardBox">
                        <div className="fotoProducto">
                            <img src={productoDetail.imgSrc} alt=""/>
                        </div>

                        <div className="marcoSkew">
                            <p className="modelo">{productoDetail.modelo}</p>
                        </div>
                        
                        <div className="caracteristicas">
                            <p className="tipo">{productoDetail.tipo}</p>
                            <div className="barra"></div>
                            <p className="medida">{productoDetail.tamanio}</p>
                        </div>
                        <div className="precio">
                            <p>${productoDetail.precio}</p>
                        </div>
                    </article>                
                )}
            </div>
            <CountDetail/>

            <button>Agregar</button>

        </div>
    
    )
}

export default ItemDetailContainer


