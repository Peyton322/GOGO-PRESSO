import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { HomeOutlined, MenuOutlined, InfoCircleOutlined, MailOutlined, CoffeeOutlined ,ScheduleOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

import Home from './home';
import MenuPage from './MenuPage';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import CoffeePage from './CoffeePage'; // 引入 CoffeePage
import DessertPage from './DessertPage'; // 引入 DessertPage
import LightMealPage from './LightMealPage'; // 引入 LightMealPage
import ReservePage from './reservePage';
import ReservationPage from './ReservationPage';
import './App.css'; 

const { Header, Content, Footer } = Layout;

const items = [
  { 
    key: '0', 
    icon: <CoffeeOutlined style={{ fontSize: '30px' }} />,  
    label: (<Link to="/" style={{ fontSize: '20px', fontWeight: 'bold' }}>GOGO PRESSO</Link>)
  },
  { key: '1', icon: <HomeOutlined />, label: (<Link to="/">首頁</Link>) },
  { key: '2', icon: <MenuOutlined />, label: '菜單', children: [
      { key: '2-1', label: (<Link to="/menu/coffee">咖啡</Link>) },
      { key: '2-2', label: (<Link to="/menu/dessert">甜點</Link>) },
      { key: '2-3', label: (<Link to="/menu/light-meal">輕食</Link>) },
      { key: '2-4', label: (<Link to="/menu/all">全部</Link>) }
    ] 
  },
  { key: '3', icon: <ShoppingCartOutlined />, label: (<Link to="/reservation">預訂</Link>) },
  { key: '4', icon: <ScheduleOutlined />, label: (<Link to="/reserve">預約</Link>) },
  { key: '5', icon: <InfoCircleOutlined />, label: (<Link to="/about">關於我們</Link>) },
  { key: '6', icon: <MailOutlined />, label: (<Link to="/contact">聯絡我們</Link>) }

];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <Header className="custom-menu">
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
            className="custom-menu"
            style={{ flex: 1, minWidth: 0, backgroundColor: '#43341B' }}
          />
        </Header>
        <div className="header-placeholder" />
        <Content style={{ padding: '0px 48px' }}>
          <div style={{ margin: '10px 0' }}></div>
          <div style={{ background: colorBgContainer, minHeight: 800, padding: 24, borderRadius: borderRadiusLG }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/coffee" element={<CoffeePage />} />  {/* 設置咖啡路由 */}
              <Route path="/menu/dessert" element={<DessertPage />} /> {/* 設置甜點路由 */}
              <Route path="/menu/light-meal" element={<LightMealPage />} /> {/* 設置輕食路由 */}
              <Route path="/menu/all" element={<MenuPage />} /> {/* 設置全部路由 */}
              <Route path="/reserve" element={<ReservePage />} />
              <Route path="/reservation" element={<ReservationPage />} />

              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        GOGO PRESSO：
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined style={{ fontSize: '20px', color: '#4F4F4F', marginRight: '10px' }} />
          Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined style={{ fontSize: '20px', color: '#4F4F4F', marginRight: '10px' }} />
          Instagram
        </a>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
