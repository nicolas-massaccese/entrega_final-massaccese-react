import './CartWidget.css';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../contexts/CartContext';

import cartIcon from './carrito.svg';

const CartWidget = () =>{
    const{ totalProducts } = useCartContext();

    return(
        <Link to='/Cart' id="carrito">
            <span className="countNum"> {totalProducts() || ''} </span>
            <img src={cartIcon} alt=""/>
        </Link>
    )
}

export default CartWidget;