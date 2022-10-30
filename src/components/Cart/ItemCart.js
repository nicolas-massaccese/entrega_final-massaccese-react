import './ItemCart.css';

import { useCartContext } from '../../contexts/CartContext';

const ItemCart = ({product}) =>{
    const{ removeProduct } = useCartContext();
    return(
        <div id="ItemCart">
            <figure className='fotoCart'>
                <img src={product.imgSrc} alt="product.modelo"/>
            </figure>
            <div className="infoCart">
                <div className="marcoSkewCart">
                    <p className='modeloCart'>{product.modelo} </p>
                </div>  
                <p className='tipoCart'>{product.tipo} </p>
                <p className='precioCart'>Precio: ${product.precio} </p>
                <p className='subtotalCart'>Subtotal: ${product.quantity * product.precio} </p>
                <button className='botones'onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;