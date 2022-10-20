import { Outlet, Link } from 'react-router-dom'
import logo from '../images/logo.png'
import '../index.css'

const Layout = () => {
    return (
        <>        
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3">
            <div className="container justify-content-between  ">
                <img src={logo} className='img logo' alt="" />
                <Link to='/' className="navbar-brand">
                    <img src="" alt="" width="30"  className="d-inline-block align-text-top"></img>
                    Rememberer
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/info' className="nav-link">App Info</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            <Outlet />
        </>
    
    )
}

export default Layout