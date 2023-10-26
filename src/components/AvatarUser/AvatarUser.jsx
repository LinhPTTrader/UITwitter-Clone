import React, { useState } from 'react'
import EditAvatar from './AddAvatar'
import { Avatar, Button, Modal, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { EditUser } from '../../services/user.services'
import { fetchUser } from '../../stores/author/userAsyncSlice'


const AvatarUser = ({ imageUser }) => {
    const [avatar, SetAvatar] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector(state => state.asyncAuth.user)
    const dispatch = useDispatch()
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        console.log()
        EditUser({ ...user, avatar })
            .then(res => {
                dispatch(fetchUser())
                message.success(res.message)
            })
            .catch(err => console.log(err))
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Avatar onClick={showModal} src={imageUser} size={100} icon={<UserOutlined />} />
            <Modal title="Chỉnh sửa Avatar" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <EditAvatar avatar={imageUser} SetAvatar={SetAvatar} />
            </Modal>
        </div>
    )
}

export default AvatarUser