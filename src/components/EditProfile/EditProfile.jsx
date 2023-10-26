import React, { useEffect, useState } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { EditUser } from '../../services/user.services';
import { fetchUser } from '../../stores/author/userAsyncSlice';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */


const EditProfile = ({ onOk }) => {
    const user = useSelector(state => state.asyncAuth.user)
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const [date_of_birth, SetDateOfBirth] = useState()

    useEffect(() => {
        form.setFieldsValue(user)
    }, [user])

    const onChange = (date, dateString) => {
        SetDateOfBirth(dateString)
    };
    const onFinish = (values) => {
        console.log({ ...values, date_of_birth });
        EditUser({ ...values, date_of_birth })
            .then(res => {
                message.success(res.message)
                dispatch(fetchUser())
                onOk()
            })
            .catch(err => {
                message.error('Cập nhật thất bại')
                onOk()
            })

    };
    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            validateMessages={validateMessages}
            form={form}
        >
            <Form.Item
                name='name'
                label="Tên"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item label='Ngày sinh'>
                <DatePicker format="YYYY-MM-DD" onChange={onChange} />
            </Form.Item>
            <Form.Item name='username' label="Username">
                <Input />
            </Form.Item>

            <Form.Item name='website' label="Website">
                <Input />
            </Form.Item>
            <Form.Item name='location' label="Địa chỉ">
                <Input />
            </Form.Item>
            <Form.Item name="bio" label="Tiểu sử">
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Chỉnh sửa
                </Button>
            </Form.Item>
        </Form>
    );
}

export default EditProfile