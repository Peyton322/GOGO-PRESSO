import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, message, Select } from 'antd';
import axios from 'axios';
import './reservePage.css';

const { TextArea } = Input;
const { Option } = Select;

const ReservePage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios.post('http://localhost:3001/reserve', {
      name: values.name,
      email: values.email,
      phone: values.phone,
      people: values.people,
      date: values.date.format('YYYY-MM-DD'),
      time: values.time.format('HH:mm:ss'),
      message: values.message,
    })
      .then(response => {
        message.success('預約成功！');
        form.resetFields();
      })
      .catch(error => {
        message.error('預約失敗，請稍後再試。');
      });
  };

  const disabledDate = (current) => {
    // 禁用星期一
    return current && current.day() === 1;
  };

  const disabledHours = () => {
    // 禁用非營業時間
    const hours = [];
    for (let i = 0; i < 24; i++) {
      if (i < 11 || i > 18) {
        hours.push(i);
      }
    }
    return hours;
  };

  return (
    <div className="reserve-container">
      <div className="image-container">
        <img
          style={{ width: '100%', height: '300px', objectFit: 'cover', opacity: 0.85 }}
          src={require("./images/flower1.jpg")}
          alt="Coffee"
        />
        <h1 className="title" style={{ fontSize: '38px' }}>GOGO PRESSO</h1>
        <h1 className="subtitle" style={{ fontSize: '20px' }}>預約</h1>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
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
          name="email"
          label="電子郵件"
          rules={[{ required: true, message: '請輸入您的電子郵件' }]}
        >
          <Input placeholder="請輸入您的電子郵件" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="電話號碼"
          rules={[{ required: true, message: '請輸入您的電話號碼' }]}
        >
          <Input placeholder="請輸入您的電話號碼" />
        </Form.Item>
        <Form.Item
          name="people"
          label="預約人數"
          rules={[{ required: true, message: '請選擇預約人數' }]}
        >
          <Select placeholder="請選擇人數">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="date"
          label="預約日期"
          rules={[{ required: true, message: '請選擇預約日期' }]}
        >
          
          <DatePicker style={{ width: '100%' }} disabledDate={disabledDate} placeholder="請選擇日期" />
          
        </Form.Item>
        <Form.Item
          name="time"
          label="預約時間"
          rules={[{ required: true, message: '請選擇預約時間' }]}
        >
          <TimePicker
            style={{ width: '100%' }}
            format="HH:mm"
            disabledHours={disabledHours}
            minuteStep={10} // 這樣用戶只能選擇每15分鐘
            placeholder="請選擇時間"
          />
          
        </Form.Item>
        <Form.Item
          name="message"
          label="備註"
        >
          <TextArea rows={4} placeholder="有任何特殊要求請告訴我們" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} className='buttom'>
            提交預約
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReservePage;
