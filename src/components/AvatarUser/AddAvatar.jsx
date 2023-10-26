import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Typography, Upload, message } from 'antd';
import { v4 as uuidv4 } from 'uuid'; // Lấy UI duy nhất
import { PostListImage } from '../../services/user.services';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const EditAvatar = ({ avatar, SetAvatar }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([{
        uid: uuidv4(),
        name: avatar,
        status: 'done',
        url: avatar,
    }]);

    const handleCancel = () => {
        setPreviewOpen(false)
    };
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => {
        const newArr = newFileList.map(item => {
            return {
                ...item, status: 'done'

            }
        })
        setFileList([newArr[newArr.length - 1]])
    };

    // Post file img lên Server
    const postListFile = ({ file, onSuccess, onError }) => {
        // console.log(file)
        PostListImage(file)
            .then(res => {
                if (res && res.data) {
                    console.log(res.data)

                    SetAvatar(res.data.result[0].url)
                    //onSuccess('Upload thành công')
                    // message.success(res.data.message)
                }
            })
        //.catch(err => onError('Upload thất bại'))
    }
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <div>
            <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                customRequest={postListFile}
                showUploadList={
                    { showRemoveIcon: false }
                } // Xóa Icon Remove
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal></div>
    )
}

export default EditAvatar