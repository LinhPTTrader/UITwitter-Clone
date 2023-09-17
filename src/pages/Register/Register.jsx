import { Button, DatePicker, Form, Input, message } from 'antd'
import './register.css'
import { UserRegister } from '../../services/user.services';
import { useNavigate } from 'react-router-dom';


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        // console.log('Received values of form: ', { ...values, date_of_birth: new Date(values.date_of_birth.$d) });
        UserRegister(values)
            .then(res => {
                if (res.status === 200) {
                    message.success(res.data.message);
                    navigate('/login')

                }
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 422) [
                    message.warning(err.response.data.message)
                ]
            })
    };


    return (
        <div className='register-form'>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                style={{
                    width: 600,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Name"
                    name='name'
                    rules={[
                        {
                            required: true,
                            message: 'Name is not empty'
                        },

                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm_password"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item label="DatePicker" name='date_of_birth'>
                    <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}

export default Register