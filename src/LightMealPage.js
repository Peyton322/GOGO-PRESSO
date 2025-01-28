import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import './lightmeal.css';
import './allmenu.css'

const { Meta } = Card;

const LightMealPage = () => {
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
      cover={<img alt="lightmeal" src={imageSrc} />}
      onClick={() => showModal(title, imageSrc, description)}
    >
      <Meta title={title} />
    </Card>
  );

  return (
    <div className='menu'> 
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img
          alt="banner"
          src={require("./images/meal2.jpg")}
          style={{ width: '100%', height: '300px', objectFit: 'cover',opacity: 0.8}}
        />
        <h1 className='title' style={{ fontSize: '38px' }}>GOGO PRESSO</h1>
        <p className="subtitle" style={{ fontSize: '25px' }}>甜點</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center', fontSize: '48px' }} className='name'> </h2>
          <div className='cardContainer'>
            {renderCard("奶酥/花生厚片吐司 $35", require("./menuImage/20.jpg"), "內含有花生，請留意是否適合您的食品過敏情况。")}
            {renderCard("熱壓吐司 $50", require("./menuImage/21.jpg"), "花生奶油：$35 / 起司火腿：$50\n 請留意含有過敏原成分")}
            {renderCard("香蒜吐司條 $45", require("./menuImage/23.jpg"), "新鮮吐司切成條狀，塗抹香蒜奶油，香氣四溢，外酥內軟，每一口都帶來濃郁的味道和豐富的口感。搭配一杯熱咖啡享受美好的早餐或下午茶時光。")}
            {renderCard("GOGO鬆餅 $85", require("./menuImage/22.jpg"), "外帶：$55 /內用隱藏版：$85\n新鮮出爐的 GOGO 鬆餅，外脆內軟，口感綿密，香氣撲鼻。搭配新鮮水果、香甜蜂蜜或濃鬱奶油，每一口都是甜蜜的享受。 ")}
          </div>
      </div>
      <Modal
        title={modalContent.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <div className="modal-description">
          {modalContent.description ? modalContent.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          )) : null}
        </div>
      </Modal>
    </div>
  );
};

export default LightMealPage;
