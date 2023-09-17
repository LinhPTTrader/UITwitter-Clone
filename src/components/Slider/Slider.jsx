import './slider.css';
import q1 from '../../assets/q1.jpg'
import q2 from '../../assets/q2.jpg'
import {
    EllipsisOutlined,
    SearchOutlined,
} from '@ant-design/icons';
const Slider = () => {
    return (
        <div className='slider'>
            <div className='slider-ads'>
                <h3>Được tài trợ</h3>
                <ul>
                    <li>
                        <div className='slider-ads-content'>
                            <img src={q1} />
                            <div>
                                <h4>Sách hay</h4>
                                <p>Cuộc phiêu lưu đại ngàn</p>
                            </div>
                        </div>
                    </li>
                    <li> <div className='slider-ads-content'>
                        <img src={q2} />
                        <div>
                            <h4>Sách hay</h4>
                            <p>Cuộc phiêu lưu đại ngàn</p>
                        </div>
                    </div></li>
                </ul>
            </div>
            <div className='slider-message'>
                <div className='slider-message-content'>
                    <span>Người liên hệ</span>
                    <ul>
                        <li><SearchOutlined /></li>
                        <li><EllipsisOutlined /></li>
                    </ul>
                </div>
                <div className='slider-message-list-user'>
                    <ul>
                        <li>User1</li>
                        <li>User2</li>
                        <li>User3</li>
                        <li>User4</li>
                        <li>User5</li>
                        <li>User5</li>
                        <li>User5</li>
                        <li>User1</li>
                        <li>User2</li>
                        <li>User3</li>
                        <li>User4</li>
                        <li>User5</li>
                        <li>User5</li>
                        <li>User5</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Slider