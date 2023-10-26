
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserLogin } from '../../services/user.services';
import { useDispatch } from 'react-redux';
import { doLoginAction } from '../../stores/author/userAsyncSlice';

// import { useSelector } from 'react-redux'
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onFinish = async (values) => {
        UserLogin(values)
            .then(async (res) => {
                // console.log(res)
                if (res && res.status === 200) {
                    localStorage.setItem('accessToken', res.data.accessToken)
                    console.log(localStorage.getItem('accessToken'))
                    dispatch(doLoginAction(res.data.result))
                    navigate('/')
                    message.success(res.data.message)


                }
            })
            .catch(err => {
                if (err.response.status === 422) {
                    message.warning(err.response.data.message)
                } else {
                    console.log(err.response)
                }
            })

    };
    console.log('render')
    return (
        <div className='layout-login-form'>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Email is not valid'
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link className="login-form-forgot" to="/forgot-password">Forgot password</Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/register">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login