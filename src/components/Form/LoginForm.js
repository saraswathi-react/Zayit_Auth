// import React,{useState} from 'react';
// import { Button, Checkbox, Col, Form, Input, Row } from 'antd';

// export const LoginForm = () => {
//     const [isChecked,setIsChecked] = useState(false)

//     const onFinish = (values) => {
//         console.log('Success:', values);
//     };
//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };
//     return (
//         <div>
//             <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
//             <br />
//             <Form
//                 name="login_form"
//                 labelCol={{
//                     span: 8,
//                 }}
//                 wrapperCol={{
//                     span: 24,
//                 }}
//                 initialValues={{
//                     remember: true,
//                 }}
//                 layout='vertical'
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//                 size='large'
//             >
//                 <Row gutter={[12, 8]}>
//                     <Col lg={12} md={24}>
//                         <Form.Item
//                             label="Email"
//                             name="email"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Please input your Email!',
//                                 },
//                                 {
//                                     type: 'email',
//                                     message: 'Email is not a valid email!'
//                                 },
//                             ]}
//                         >
//                             <Input />
//                         </Form.Item>
//                     </Col>

//                     <Col lg={12} md={24}>
//                         <Form.Item
//                             label="Password"
//                             name="password"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Please input your password!',
//                                 },
//                             ]}
//                         >
//                             <Input.Password />
//                         </Form.Item>
//                     </Col>
//                 </Row>

//                 <Form.Item
//                 >
//                     {/* <Button type="default" htmlType="submit">
//                         LOGIN
//                     </Button> */}
//                 </Form.Item>

//                 <Form.Item
//                     name="remember"
//                     valuePropName="checked"
//                 >
//                     {/* <Checkbox checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)}>Remember me</Checkbox>&nbsp; */}
//                     <a href="">
//                         Lost your password?
//                     </a>
//                 </Form.Item>

//             </Form>
//         </div>
//     );
// }
