import './ItemListContainer.css';

import { useEffect, useState  } from 'react'
import { useParams, Link  } from 'react-router-dom'

import ItemList from './ItemList';

import { getFirestore, collection, getDocs, query, where, } from 'firebase/firestore';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { tipoProducto } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, 'items');
        if (tipoProducto){
            const q = query(itemsCollection, where('tipo', '==', tipoProducto));
            getDocs(q)
            .then((snapshot) => {
                const arrproducts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(arrproducts);
            });
        } else{
            getDocs(itemsCollection).then((snapshot) => {
                const arrproducts = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(arrproducts);
            });

    }}, [tipoProducto])

    return (
        <div>
            <div className=''>
            {products.length === 0 ? (
            <div>Cargando...</div>
            ) : (
                <div className='container'>
                    {products.map((product) => {                        
                        return (
                        <div key = {product.id}>
                            <Link className='linkStyle' to={`/Nuestros-Productos/${product.tipo}/${product.id}`} >
                                <ItemList product = {product} />
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
