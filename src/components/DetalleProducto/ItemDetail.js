import  './ItemDetail.css';
import CountDetail from './CountDetail';

import { useCartContext } from '../../contexts/CartContext';

import { Link } from 'react-router-dom';
import { useState } from 'react';



const ItemDetail = ({ productoDetail }) => {
    const [gotoCart, setGotoCart] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGotoCart(true)
        addProduct(productoDetail, quantity)
    }

    return (
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

            <CountDetail/>

            <button>Agregar</button>
        </article>
        
    )
}

export default ItemDetail
