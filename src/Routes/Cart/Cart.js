import './Cart.css';

import ItemCart from '../../components/Cart/ItemCart';

import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

function Cart() {

    const defaultForm = {cards:'', cardNum:'', name:'', email:'', message:'', }

    const { cart, totalPrice } = useCartContext();
    const [form, setForm] = useState(defaultForm);
    const [id, setId] = useState()
    

    if (cart.length === 0){

        return(
            <div>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Seguir comprando</Link>                 
            </div>

        )
    }

    const changeHandler = (ev) => {
        setForm({...form, [ev.target.name]: ev.target.value, items: cart.map(product => ({ id: product.id, modelo: product.modelo, tipo: product.tipo, precio: product.precio})),
        total: totalPrice()});
    }

    const submitHandler = (ev) => {
        ev.preventDefault()
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, form).then((snapshot) => {
            setId(snapshot.id)
        })
    }

    const resetHandler = () => {
        setForm(defaultForm)
        setId('')
    }

    return (
        <div >
            {id ? (
                <div>Gracias por su compra, su orden de compra es la {id}
                    <button onClick={resetHandler} >Seguir Comprando</button>
                </div>
                ) : (
                <div className='cartContainer'>
                    <div>
                        {cart.map(product => <ItemCart key= {product.id} product={product} />)}
                        <p>
                            total: {totalPrice()}
                        </p>
                    </div>
                    <form className='ordenCompra' onSubmit={submitHandler}>
                        <div>
                        <select name='cards' size="1"onChange={changeHandler}>
                            <option name='cards' id='cards' value={form.cards}>Visa</option>
                            <option name='cards' id='cards' value={form.cards}>Master Card</option>
                            <option name='cards' id='cards' value={form.cards}>American Express</option>
                        </select>
                        <div>
                            <label htmlFor='cardNum'>Numero</label>
                            <input name='cardNum' id='cardNum' value={form.cardNum} onChange={changeHandler}  />
                        </div>
                        </div>
                        <div>
                            <label htmlFor='name'>Nombre</label>
                            <input name='name' id='name' value={form.name} onChange={changeHandler}  />
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' value={form.email} onChange={changeHandler}  />
                        </div>
                        <div>
                            <label htmlFor='message'>Mensaje</label>
                            <input name='message' id='message' value={form.message} onChange={changeHandler}  />
                        </div>
                        <button>Finalizar Compra</button>
                    </form>
                </div>
            )}
        </div>    
    )
}

export default Cart;
            /* <button onClick={handleClick}>Finalizar Compra</button> */
