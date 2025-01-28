import React from 'react';
import { Badge, Descriptions } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
import './ContactUs.css'; // 引入 CSS 文件

const items = [
  {
    key: '1',
    label: '店名',
    children: 'GOGO PRESSO',
  },
  {
    key: '2',
    label: '地址',
    children: '811高雄市楠梓區朝新路115號',
    span: 2,
  },
  {
    key: '4',
    label: '連絡電話',
    children: '0917-075-427',
  },
  {
    key: '5',
    label: '電子郵件',
    children: 'gogopresso@gmail.com',
    span: 2,
  },
  {
    key: '6',
    label: '營業時間',
    children: (
      <>
        週一 休息
        <br />
        週二至週日 11:00 - 19:00
      </>
    ),
    span: 3,
  },
  {
    key: '10',
    label: '社群媒體',
    children: (
      <>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined style={{ fontSize: '20px', color: '#3b5998', marginRight: '10px' }} />
          Facebook
        </a>
        <br />
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined style={{ fontSize: '20px', color: '#E4405F', marginRight: '10px' }} />
          Instagram
        </a>
      </>
    ),
  },
];

const ContactUs = () => (
  <div className="contact-us">
    <div className="image-container">
      <img
        style={{ width: '100%', height: '300px', objectFit: 'cover' ,opacity: 0.4}}
        src={require("./images/flower.png")}
        alt="Coffee"
      />
      <h1 className="title" style={{fontSize:'38px'}}>GOGO PRESSO</h1>
      <h1 className="subtitle" style={{fontSize:'20px'}}>聯絡我們</h1>
    </div>
    <div style={{ margin: '40px 0' }}></div>
    <Descriptions  bordered items={items} />
  </div>
);

export default ContactUs;
