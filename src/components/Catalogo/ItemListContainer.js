import './ItemListContainer.css';

import { useEffect, useState  } from 'react'
import { useParams, Link  } from 'react-router-dom'

import ItemList from './ItemList';

import { getFirestore, collection, getDocs, query, where, } from 'firebase/firestore';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { tipoProducto } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'items');
        if (tipoProducto){
            const q = query(itemsCollection, where('tipo', '==', tipoProducto));
            getDocs(q)
            .then((snapshot) => {
                const arrproductos = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(arrproductos);
            });
        } else{
            getDocs(itemsCollection).then((snapshot) => {
                const arrproductos = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(arrproductos);
            });

    }}, [tipoProducto])

    return (
        <div>
            <div className=''>
            {productos.length === 0 ? (
            <div>Cargando...</div>
            ) : (
                <div className='container'>
                    {productos.map((producto) => {                        
                        return (
                        <div key = {producto.id}>
                            <Link className='linkStyle' to={`/Nuestros-Productos/${producto.tipo}/${producto.id}`} >
                                <ItemList producto = {producto} />
                            </Link>
                        </div> 
                        )
                    })}
                </div>           
            )}
            </div>            
        </div>   
    )
}

export default ItemListContainer
