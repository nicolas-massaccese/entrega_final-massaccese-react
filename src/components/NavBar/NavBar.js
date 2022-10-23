import './NavBar.css';
import logo from './logo_1000feet_home.svg';

import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () =>{

    return(
        <header>
            <nav>
                <ul>
                    <li> <Link to='/Nuestros-Productos/Mochilas'>MOCHILAS</Link></li>
                    <li> <Link to='/Nuestros-Productos/Bolsos'>BOLSOS</Link></li>
                    <li> <Link to='/Nuestros-Productos/Morrales'>MORRALES</Link></li>
                    <li> <Link to='/Nuestros-Productos/Accesorios'>ACCESORIOS</Link></li>
                </ul>
                <Link to='/' className='logo' ><img src={logo} alt="1000feet"/></Link>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;