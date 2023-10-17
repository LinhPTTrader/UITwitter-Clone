
import './navbar.css';
import logo from '../../assets/react.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { AppstoreOutlined, BellOutlined, HomeOutlined, LaptopOutlined, LoginOutlined, MessageOutlined, ShopOutlined, UserOutlined, YoutubeOutlined } from '@ant-design/icons';
import DropProfile from '../../components/DropProfile/DropProfile';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const auth = useSelector(state => state.asyncAuth.isAuthenticated)
    //Code này xử lí dropdown hiện thị khi click ra ngoài
    const menuRef = useRef(null)
    const [open, setOpen] = useState(false);
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    return (
        <div className='navbar-main' ref={menuRef}>
            <div className="navbar">
                <div className="nav-logo">
                    <Link to="/"> <img src={logo} alt='' /></Link>
                    <input className='nav-input' placeholder='Tìm kiếm' />
                </div>
                <div className="nav-listIcon">
                    <ul>
                        <li><HomeOutlined /></li>
                        <li><YoutubeOutlined /></li>
                        <li><ShopOutlined /></li>
                        <li><UserOutlined /></li>
                        <li><LaptopOutlined /></li>
                    </ul>
                </div>
                <div className="nav-profile">
                    <ul>
                        <li><AppstoreOutlined /></li>
                        <li><Link to='/chat' style={{ color: 'inherit', }}><MessageOutlined /></Link></li>
                        <li><BellOutlined /></li>
                        {auth && <li onClick={() => setOpen(!open)}>
                            <UserOutlined />
                        </li>}
                        {!auth && <li><Link to='/login' style={{ color: 'inherit', }}><LoginOutlined /></Link></li>}

                    </ul>
                </div>
            </div>
            {open && (<div className='nav-drop-profile' >
                <DropProfile />
            </div>)}
        </div>
    )
}

export default Navbar