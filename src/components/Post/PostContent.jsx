import React, { useState } from 'react'
import './Post.css'
import { Avatar, Select, message } from 'antd'
import { DashOutlined, FileImageOutlined, GifOutlined, MacCommandOutlined, SendOutlined, SmileOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import { CreatTweet } from '../../services/user.services'
import PostImage from './PostImage'
import { useSelector } from 'react-redux'


// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const PostContent = ({ handleOk }) => {
    const [value, setValue] = useState('');
    const [audience, setAudience] = useState(0)
    const [medias, setMedias] = useState([])
    const user = useSelector(state => state.asyncAuth.user)
    const onChange = (value) => {
        setAudience(value)
    };
    const [showImage, SetShowImage] = useState(false)

    const onSearch = (value) => {
        console.log('search:', value);
    };


    const HanldeUpPost = () => {
        const tweet = {
            type: 0,
            audience: audience,
            content: value,
            hashtags: [],
            mentions: [],
            parent_id: null,
            medias: medias
        }
        CreatTweet(tweet)
            .then(res => {
                if (res.status === 200) {
                    message.success(res.data.message);
                    setValue('')
                    handleOk();
                } else {
                    message.warning('ERR')
                }
            })
            .catch(err => {
                message.error('Error')
            })

    }
    return (
        <>
            <div className='Post'>
                <div className='Post-Header'>
                    <h2>Tạo bài viết</h2>
                </div>
                <div className='Post-Avatar'>
                    <div>
                        <Avatar size={64} icon={<UserOutlined />} />
                    </div>
                    <div>
                        <h4>{user.name}</h4>
                        <Select
                            showSearch
                            placeholder="Đối tượng"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={filterOption}
                            options={[
                                {
                                    value: 0,
                                    label: 'Công khai',
                                },
                                {
                                    value: 1,
                                    label: 'Chỉ mình tôi',
                                },
                                {
                                    value: 2,
                                    label: 'Bạn bè',
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className='Post-Content'>
                    <TextArea
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Nội dung bài đăng"
                        autoSize={{
                            minRows: 5,
                            maxRows: 10,
                        }}
                    />
                </div>
                {showImage &&
                    <div className='Post-Image'>
                        <PostImage medias={medias} setMedias={setMedias} />
                    </div>
                }

                <div className='Post-Icon'>
                    <div>
                        <MacCommandOutlined />
                    </div>
                    <div>
                        <SmileOutlined />
                    </div>
                </div>
                <div className='Post-Menu'>
                    <div>
                        <p>Thêm vào bài viết của bạn</p>
                    </div>
                    <div>
                        <ul className='Post-ListIcon'>
                            <li onClick={() => { SetShowImage(!showImage) }}><FileImageOutlined /></li>
                            <li><UserAddOutlined /></li>
                            <li><SmileOutlined /></li>
                            <li><SendOutlined /></li>
                            <li><GifOutlined /></li>
                            <li><DashOutlined /></li>
                        </ul>
                    </div>
                </div>
                <div className='Post-Button'>
                    <button onClick={HanldeUpPost}>Đăng</button>
                </div>
            </div>
        </>
    )
}

export default PostContent