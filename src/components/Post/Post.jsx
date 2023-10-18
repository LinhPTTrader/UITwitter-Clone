import React, { useState } from 'react'
import { Avatar, Input, } from 'antd';
import { FileImageOutlined, SmileOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import './Post.css'
import Modal from 'antd/es/modal/Modal';
import PostContent from './PostContent';

const Post = () => {
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
                        <div className='Post-Click-Modal-Avatar-Size'>
                            <Avatar size={40} icon={<UserOutlined />} />
                        </div>
                        <div className='Post-Click-Modal-Input-Size'>
                            <Input size={400} placeholder="Bạn đang nghĩ gì? " />
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
                <PostContent handleOk={handleOk} />
            </Modal>
        </>
    )
}

export default Post