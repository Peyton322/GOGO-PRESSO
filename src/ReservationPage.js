import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';
import './reservationPage.css';

const { Option } = Select;

const ReservationPage = () => {
  const [form] = Form.useForm();
  const [productType, setProductType] = useState('');

  const onFinish = (values) => {
    axios.post('http://localhost:3001/order', {
      name: values.name,
      phone: values.phone,
      email: values.email,
      product: values.product,
      size: values.size || '',
      type: values.type || '',
      quantity: values.quantity
    })
      .then(response => {
        message.success('訂單已成功提交！');
        form.resetFields();
      })
      .catch(error => {
        message.error('提交失敗，請檢查表單資料！');
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('提交失敗，請檢查表單資料！');
  };

  const handleProductChange = (value) => {
    setProductType(value);
  };

  return (
    <div className="reservation-container">
      <div className="image-container">
        <img
          style={{ width: '100%', height: '300px', objectFit: 'cover', opacity: 0.85 }}
          src={require("./images/14.jpg")}
          alt="Coffee"
        />
        <h1 className="title" style={{ fontSize: '38px' }}>GOGO PRESSO</h1>
        <h1 className="subtitle" style={{ fontSize: '20px' }}>預訂</h1>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: '請輸入您的姓名' }]}
        >
          <Input placeholder="請輸入您的姓名" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="電話號碼"
          rules={[{ required: true, message: '請輸入您的電話號碼' }]}
        >
          <Input placeholder="請輸入您的電話號碼" />
        </Form.Item>
        <Form.Item
          name="email"
          label="電郵"
          rules={[{ required: true, message: '請輸入您的Email' }]}
        >
          <Input placeholder="請輸入您的Email" />
        </Form.Item>

        <Form.Item
          name="product"
          label="選擇產品"
          rules={[{ required: true, message: '請選擇產品' }]}
        >
          <Select placeholder="選擇一項產品" onChange={handleProductChange}>
            <Option value="coffee">咖啡豆</Option>
            <Option value="cake">蛋糕</Option>
          </Select>
        </Form.Item>

        {productType === 'cake' && (
          <Form.Item
            name="size"
            label="選擇蛋糕尺寸"
            rules={[{ required: true, message: '請選擇蛋糕尺寸' }]}
          >
            <Select placeholder="選擇蛋糕尺寸">
              <Option value="4inch">4吋</Option>
              <Option value="6inch">6吋</Option>
              <Option value="8inch">8吋</Option>
            </Select>
          </Form.Item>
        )}

        {productType === 'coffee' && (
          <Form.Item
            name="type"
            label="選擇咖啡豆種類"
            rules={[{ required: true, message: '請選擇咖啡豆種類' }]}
          >
            <Select placeholder="選擇咖啡豆種類">
              <Option value="arabica">阿拉比卡</Option>
              <Option value="robusta">羅布斯塔</Option>
              <Option value="brazil">巴西咖啡豆</Option>
            </Select>
          </Form.Item>
        )}

        <Form.Item
          name="quantity"
          label="數量"
          rules={[{ required: true, message: '請輸入數量' }]}
        >
          <Input type="number" min={1} placeholder="請輸入數量" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} className='buttom'>
            提交訂單
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReservationPage;
