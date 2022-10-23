import './CartWidget.css';


import carritoIcon from './carrito.svg';

const CartWidget = () =>{

    return(
        <div id="carrito">
            <img src={carritoIcon} alt=""/>
        </div>
    )
}

export default CartWidget;