import './Cart.css';

import ItemCart from '../../components/Cart/ItemCart';

import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

function Cart() {

    const defaultForm = {cards:'', cardNum:'', name:'', email:'', message:'', }

    const { cart, totalPrice, clearCart } = useCartContext();
    const [form, setForm] = useState(defaultForm);
    const [id, setId] = useState()
    

    if (cart.length === 0){

        return(
            <div className='mensajeAuto'>
                <p>No hay elementos en el carrito</p>
                <Link className='botonesAgr' to='/'>Seguir comprando</Link>                 
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
        clearCart()
    }

    return (
        <div >
            {id ? (
                <div className='mensajeAuto'>
                    <p>
                        Gracias por su compra, su orden de compra es la {id}
                    </p>
                    <Link className='botonesAgr' to='/'onClick={resetHandler}>Seguir comprando</Link>  
                </div>
                ) : (
                <div className='cartContainer'>
                    <div>
                        {cart.map(product => <ItemCart key= {product.id} product={product} />)}
                        <p className='totalPrice'>
                            TOTAL: ${totalPrice()}
                        </p>
                    </div>
                    <div className='ordenCompra'>
                        <form  className='formulario' onSubmit={submitHandler}>
                            <h4>Orden de compra</h4>
                            <select id='cardNum' name='cards' size="1" value={form.cards} onChange={changeHandler}>
                                <option>Elegir Tarjeta</option>
                                <option>Visa</option>
                                <option>Master Card</option>
                                <option>American Express</option>
                            </select>
                            <div>
                                <label htmlFor='cardNum'>Numero</label>
                                <input name='cardNum' id='cardNum' value={form.cardNum} onChange={changeHandler}  />
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
                                <label htmlFor='message'>Comentarios</label>
                                <input name='message' id='message' value={form.message} onChange={changeHandler}  />
                            </div>
                            <button className='finalizarCompra'>Finalizar Compra</button>
                        </form>
                    </div>
                    
                </div>
            )}
        </div>    
    )
}

export default Cart;
            /* <button onClick={handleClick}>Finalizar Compra</button> */
