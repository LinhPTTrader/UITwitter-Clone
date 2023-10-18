import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Upload } from 'antd';
import { PostListImage } from '../../services/user.services';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const PostImage = ({ medias, setMedias }) => {
    const URL = `http://localhost:3000/medias/upload-image`;
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    useEffect(() => {
        console.log(medias)
    }, [])

    const handleCancelImage = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    }

    // Khi có sự thây đổi hình ảnh
    const handleChange = (
        { fileList: newFileList, file: fileChange }) => {
        console.log(newFileList)
        if (medias.length > newFileList.length) {
            let arr = medias.filter(item => item.uid != fileChange.uid);
            console.log('remove Image')
            setMedias(arr)
        }


    };


    // Post file img lên Server
    const postListFile = ({ file, onSuccess, onError }) => {
        console.log(file)
        PostListImage(file)
            .then(res => {
                console.log(res)
                if (res && res.data) {
                    setMedias(listImage => [...listImage, {
                        name: file.name,
                        uid: file.uid,
                        status: 'done',
                        url: res.data.result[0].url
                    }])
                }
            })
            .catch(err => onError('Upload thất bại'))
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
                fileList={medias}
                onPreview={handlePreview}
                onChange={handleChange}
                customRequest={postListFile}
                multiple={true}

            >
                {medias.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancelImage}>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>

        </div>
    )
}

export default PostImage