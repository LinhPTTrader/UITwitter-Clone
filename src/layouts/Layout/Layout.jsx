
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './Layout.css'
import Menu from '../../components/Menu/Menu'
import Slider from '../../components/Slider/Slider'

const Layout = () => {
    return (
        <div className='main'>
            <div className='main-navbar'>
                <Navbar />
            </div>
            <div className='container'>
                <div className='layout-menu'>
                    <Menu />
                </div>
                <div className='layout-content'><Outlet></Outlet></div>
                <div className='layout-slider'>
                    <Slider />
                </div>
            </div>
            {/* <div className='main-footer'>
                <Footer />
            </div> */}
        </div>
    )
}

export default Layout