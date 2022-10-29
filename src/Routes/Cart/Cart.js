import './Cart.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import ItemCart from '../../components/Cart/ItemCart';

function Cart() {
    const{ cart, totalPrice } = useCartContext();

    if (cart.length === 0){

        return(
            <div>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Seguir comprando</Link>                 
            </div>

        )
    }

    return (
        <div className='container'> 
            {cart.map(product => <ItemCart key= {product.id} product={product} />)}

            <p>
            total: {totalPrice()}
            </p>       
        </div>    
    )
}

export default Cart;
