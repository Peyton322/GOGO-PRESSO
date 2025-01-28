import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import './menu.css';
import './allmenu.css'

const { Meta } = Card;

const MenuPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = (title, imageSrc, description) => {
    setModalContent({ title, imageSrc, description });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderCard = (title, imageSrc, description) => (
    <Card
      hoverable
      cover={<img alt="coffee" src={imageSrc} />}
      onClick={() => showModal(title, imageSrc, description)}
    >
      <Meta title={title} />
    </Card>
  );

  return (
    <div>
      <div className='menu' style={{ position: 'relative', textAlign: 'center' }}>
        <div className='imgcontainer'>
        <img 
          alt="banner"
          src="https://cafenomad.tw/tinymce-img/image_1608519872_435d5453fc1d3c777d3fc1ac50c5345f.jpeg"
          style={{ width: '100%', height: '300px', objectFit: 'cover', opacity: 0.9 }} // 调整透明度
        />
        <h1 className='title' style={{ fontSize: '38px' }}>GOGO PRESSO</h1>
        <p className="subtitle" style={{ fontSize: '25px' }}>菜單</p>
        </div>
      </div>



      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <h2 className='item'>外帶咖啡</h2>
          <p className='custom-underline'></p>
          <div className='cardContainer'>
            {renderCard("美式咖啡", require("./menuImage/11.jpg"), "熱(大)： $55\n熱(中)： $45\n冰(大)： $65\n冰(中)： $55")}
            {renderCard("經典拿鐵咖啡", require("./menuImage/25.jpg"), "熱(大)： $65\n熱(中)： $55\n冰(大)： $75\n冰(中)： $65")}
            {renderCard("摩卡咖啡", require("./menuImage/26.jpg"), "熱(大)： $75\n熱(中)： $65\n冰(大)： $85\n冰(中)： $75")}
            {renderCard("西西里咖啡", require("./menuImage/1.jpg"), "冰(大)： $85\n冰(中)： $75")}
          </div>
          <h2 className='item'>內用咖啡</h2>
          <p className='custom-underline'></p>
          <div className='cardContainer'>
            {renderCard("espresso濃縮", require("./menuImage/7.jpg"), "熱： $45")}
            {renderCard("拉霸拿鐵", require("./menuImage/6.jpg"), "熱： $95")}
            {renderCard("阿法卡朵", require("./menuImage/3.jpg"), "熱： $85")}
            {renderCard("手沖咖啡SOE", require("./menuImage/2.jpg"), "杯： $95 \n壺： $180")}
          </div>
          <h2 className='item'>甜點</h2>
          <p className='custom-underline'></p>
          <div className='cardContainer'>
            {renderCard("司康", require("./menuImage/16.jpg"), "價格：$45")}
            {renderCard("可麗露", require("./menuImage/12.jpg"), "價格：$65")}
            {renderCard("巧克力布朗尼", require("./menuImage/17.jpg"), "價格：$58 ")}
            {renderCard("雪球", require("./menuImage/8.jpg"), "價格：$65  (6顆裝)")}
          </div>
          <div className='cardContainer'>
            {renderCard("檸檬磅蛋糕", require("./menuImage/18.jpg"), "價格：$50")}
            {renderCard("瑪德蓮", require("./menuImage/19.jpg"), "價格：$35")}
            {renderCard("檸檬塔", require("./menuImage/4.jpg"), "價格：$85")}
            {renderCard("達克瓦茲", require("./menuImage/10.jpg"), "價格：$65")}
          </div>
          <div className='cardContainer'>
            {renderCard("原味巴斯克乳酪", require("./menuImage/24.jpg"), "一份： $58 \n  6吋： $380")}
            {renderCard("咖啡巴斯克乳酪", require("./menuImage/14.jpg"), "一份： $68 \n  6吋： $430")}
            {renderCard("巧克力巴斯克乳酪", require("./menuImage/15.jpeg"), "一份： $78 \n  6吋： $458")}
          </div>
          <h2 className='item'>輕食</h2>
          <p className='custom-underline'></p>
          <div className='cardContainer'>
            {renderCard("厚片土司", require("./menuImage/20.jpg"), "奶酥/花生：$35")}
            {renderCard("熱壓吐司", require("./menuImage/21.jpg"), "花生奶油： $35 \n 起司火腿： $50")}
            {renderCard("香蒜吐司條", require("./menuImage/23.jpg"), "價格：$45")}
            {renderCard("GOGO鬆餅", require("./menuImage/22.jpg"), "外帶：$55\n內用隱藏版：$85")}
          </div>
        </div>
      </div>

      <Modal
        title={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <div className="modal-content">
          <div className="modal-image">
            <img src={modalContent.imageSrc} alt={modalContent.title} />
          </div>
          <div className="modal-description">
            <h2>{modalContent.title}</h2>
            {modalContent.description ? modalContent.description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            )) : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MenuPage;
