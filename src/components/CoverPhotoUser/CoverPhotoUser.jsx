import React, { useState } from 'react'

import { Modal, message } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { EditUser } from '../../services/user.services'
import { fetchUser } from '../../stores/author/userAsyncSlice'
import EditAvatar from '../AvatarUser/AddAvatar'


const CoverPhoto = ({ imageUser }) => {
    const [cover_photo, SetCoverPhoto] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector(state => state.asyncAuth.user)
    const dispatch = useDispatch()
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        EditUser({ ...user, cover_photo })
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
        <div >
            <img className='Profile-Background' src={user.cover_photo} alt="" onClick={showModal} />
            <Modal title="Chỉnh sửa Avatar" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <EditAvatar avatar={imageUser} SetAvatar={SetCoverPhoto} />
            </Modal>
        </div>
    )
}

export default CoverPhoto