import './ItemList.css';


const ItemList = ({product}) =>{
    return(
        <article className="cardBox">
            <div className="fotoProducto">
                <img src={product.imgSrc} alt=""/>
            </div>

            <div className="marcoSkew">
                <p className="modelo">{product.modelo}</p>
            </div>
            
            <div className="caracteristicas">
                <p className="tipo">{product.tipo}</p>
                <div className="barra"></div>
                <p className="medida">{product.tamanio}</p>
            </div>
            <div className="precio">
                <p>${product.precio}</p>
            </div>

        </article>
    )
}

export default ItemList;