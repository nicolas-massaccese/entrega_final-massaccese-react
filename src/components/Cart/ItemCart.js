import './ItemCart.css';

import { useCartContext } from '../../contexts/CartContext';

const ItemCart = ({product}) =>{
    const{ removeProduct } = useCartContext();
    return(
        <div id="ItemCart">
            <img src={product.imgSrc} alt="product.modelo"/>
            <div>
                <p>Modelo: {product.modelo} </p>
                <p>tipo: {product.tipo} </p>
                <p>Precio: {product.precio} </p>
                <p>Subtotal: ${product.quantity * product.precio} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>


            </div>


        </div>
    )
}

export default ItemCart;