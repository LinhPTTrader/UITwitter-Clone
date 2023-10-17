import React, { useState } from 'react'
import { Avatar, Button, Input, Space } from 'antd';
import { DashOutlined, FileImageOutlined, GifOutlined, MacCommandOutlined, SendOutlined, SmileOutlined, UserAddOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import './Post.css'
import Modal from 'antd/es/modal/Modal';

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
const Post = () => {

    const [value, setValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='Post-Click'>
                <div className='Post-Click-Modal'>
                    <div className='Post-Click-Modal-Avatar' onClick={showModal}>
                        <div>
                            <Avatar size={40} icon={<UserOutlined />} />
                        </div>
                        <div>
                            <Input style={{ width: 500 }} size='large' placeholder="Bạn đang nghĩ gì? " />
                        </div>
                    </div>
                    <div className='Post-Click-Modal-ListIcon'>
                        <div className='Post-Click-Modal-Icon'>
                            <VideoCameraOutlined />
                            <span>Video trực tiếp</span>
                        </div>
                        <div className='Post-Click-Modal-Icon'>
                            <FileImageOutlined />
                            <span>Ảnh/Video</span>
                        </div>
                        <div className='Post-Click-Modal-Icon'>
                            <SmileOutlined />
                            <span>Cảm xúc/hoạt động</span>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div className='Post'>
                    <div className='Post-Header'>
                        <h2>Tạo bài viết</h2>
                    </div>
                    <div className='Post-Avatar'>
                        <div>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </div>
                        <div>
                            <h4>Linh Phan</h4>
                            <Select
                                showSearch
                                placeholder="Đối tượng"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={filterOption}
                                options={[
                                    {
                                        value: 'public',
                                        label: 'Công khai',
                                    },
                                    {
                                        value: 'private',
                                        label: 'Chỉ mình tôi',
                                    },
                                    {
                                        value: 'tag',
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
                                <li> <FileImageOutlined /></li>
                                <li> <UserAddOutlined /></li>
                                <li><SmileOutlined /></li>
                                <li><SendOutlined /></li>
                                <li><GifOutlined /></li>
                                <li><DashOutlined /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='Post-Button'>
                        <button onClick={handleOk}>Đăng</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Post