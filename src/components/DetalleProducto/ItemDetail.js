import  './ItemDetail.css';
import CountDetail from './CountDetail';

import { useCartContext } from '../../contexts/CartContext';

import { Link } from 'react-router-dom';
import { useState } from 'react';



const ItemDetail = ({productDetail}) => {


    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(productDetail, quantity)
    }

    return (
        <article key={productDetail.id} className="cardBox">
            <div className="fotoProducto">
                <img src={productDetail.imgSrc} alt=""/>
            </div>

            <div className="marcoSkew">
                <p className="modelo">{productDetail.modelo}</p>
            </div>
            
            <div className="caracteristicas">
                <p className="tipo">{productDetail.tipo}</p>
                <div className="barra"></div>
                <p className="medida">{productDetail.tamanio}</p>
            </div>
            <div className="precio">
                <p>${productDetail.precio}</p>
            </div>
        {
            goToCart
                ? <div><CountDetail initial={1} stock={productDetail.stock} onAdd={onAdd} /> <Link to='/Cart'>Comprar Ahora</Link></div> 
                : <CountDetail initial={1} stock={productDetail.stock} onAdd={onAdd} />

        }

        </article>
        
    )
}

export default ItemDetail
