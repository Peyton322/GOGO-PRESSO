import React from 'react';

import { Carousel, Image, Col, Row } from 'antd';
import './home.css';

const contentStyle = {
  margin: 0,
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {
  return (
    <div>

      <Carousel arrows infinite={false}>
        <div>
          <img src={require("./images/13.jpg")} style={{ width: '100%', height: '450px', objectFit: 'cover', lineHeight: '500px' }}></img>
        </div>
        <div>
          <img src={require("./images/15.jpg")} style={{ width: '100%', height: '450px', objectFit: 'cover', lineHeight: '500px' }}></img>

        </div>
        <div>
          <img src={require("./images/16.jpg")} style={{ width: '100%', height: '450px', objectFit: 'cover', lineHeight: '500px' }}></img>

        </div>
        <div>
          <img src={require("./images/17.jpg")} style={{ width: '100%', height: '450px', objectFit: 'cover', lineHeight: '500px' }}></img>

        </div>
      </Carousel>
      <div style={{ margin: '30px 0' }}></div>
      <h1 style={{ textAlign: 'center', fontSize: '48px' }} className='body-text'>-GOGO PRESSO-</h1>
      <p style={{ textAlign: 'center', fontSize: '30px' }} className='body-text'>coffee | dessert | light food</p>
 
      <h2 style={{ textAlign: 'center', fontSize: '36px' }} className='body-text'>A Good Day</h2>

      <div className="flex-container"> 
        <span className="image-container">
          <Image
            width={400}
            height={200} // 設定圖片寬度
            src={require("./images/2.jpg")}
          />
        </span>
        <span className="image-container">
          <Image
            width={300} // 設定圖片寬度
            height={200}
            src={require("./images/3.jpg")}
          />
        </span>
        <span className="image-container">
          <Image
            width={350}
            height={200}
            src={require("./images/5.jpg")}
          />
        </span>
        <span className="image-container">
          <Image
            width={350}
            height={200}
            src={require("./images/6.jpg")}
          />
        </span>
        <span className="image-container">
          <Image
            width={300}
            height={300}
            src={require("./images/4.jpg")}
          />
        </span>
        <span className="image-container">
          <Image
            width={400}
            height={300}
            src={require("./images/9.jpg")}
          />
        </span>
        <span className="image-container">
          <Image
            width={705}
            height={250}
            src={require("./images/12.jpg")}
          />
        </span>
      </div>

    </div>
  );
};

export default Home;
