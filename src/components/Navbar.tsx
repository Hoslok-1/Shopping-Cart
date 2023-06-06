import '../cssFiles/Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <div>
            <nav>
                <ul className='nav-links'>
                    <Link to = '/'>
                        <li>Home</li>
                    </Link>
                    <Link to = './Shop'>
                        <li>Shop</li>
                    </Link>
                </ul>
                <h3>Cart</h3>
            </nav>
        </div>
    )
}