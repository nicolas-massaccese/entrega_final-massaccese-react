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
        <article key={productDetail.id} className="detailBox">
            <div className="fotoProductoDetail">
                <img src={productDetail.imgSrc} alt=""/>
            </div>
            <div className="infoDetail">
                <div className="marcoSkewDetail">
                    <p className="modeloDetail">{productDetail.modelo}</p>
                </div>                
                <div className="caracteristicasDetail">
                    <p className="tipoDetail">{productDetail.tipo}</p>
                    <div className="barra"></div>
                    <p className="medida">{productDetail.tamanio}</p>
                </div>
                <p className="descriptionDetail">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ea necessitatibus saepe fugiat nostrum minus, iure impedit eum et quibusdam aliquam quae eligendi laudantium libero provident pariatur earum ex veniam.
                </p>
                <div className="precioDetail">
                    <p>${productDetail.precio}</p>
                </div>                            
                {
                    goToCart
                        ? <div className='count'>
                            <CountDetail initial={1} stock={productDetail.stock} onAdd={onAdd} />
                            <Link className='comprarAhora' to='/Cart'>Comprar Ahora</Link>
                        </div> 
                        : <CountDetail initial={1} stock={productDetail.stock} onAdd={onAdd} />

                }
            </div>
        </article>
        
    )
}

export default ItemDetail
