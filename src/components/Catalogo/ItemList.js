import './ItemList.css';


const ItemList = (props) =>{
    const {producto} = props;
    return(
        <article className="cardBox">
            <div className="fotoProducto">
                <img src={producto.imgSrc} alt=""/>
            </div>

            <div className="marcoSkew">
                <p className="modelo">{producto.modelo}</p>
            </div>
            
            <div className="caracteristicas">
                <p className="tipo">{producto.tipo}</p>
                <div className="barra"></div>
                <p className="medida">{producto.tamanio}</p>
            </div>
            <div className="precio">
                <p>${producto.precio}</p>
            </div>

        </article>
    )
}

export default ItemList;