import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'antd';
import './coffee.css';
import './allmenu.css'

const { Meta } = Card;

const CoffeePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isInitialModal, setIsInitialModal] = useState(false);

  const showModal = (title, imageSrc, description) => {
    setModalContent({ title, imageSrc, description });
    setIsInitialModal(false);
    setIsModalVisible(true);
  };

  const showModal2 = (description) => {
    setModalContent({ description });
    setIsInitialModal(true);
    setIsModalVisible(true);
  };

  useEffect(() => {
    // 页面加载时显示模态窗口
    showModal2(" ⚠️ SOE自家新鮮烘豆養豆需3~5天 預定請洽詢豆單");
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderCard = (title, price, imageSrc, description) => (
    <Card
      hoverable
      cover={<img alt="lightmeal" src={imageSrc} />}
      onClick={() => showModal(title, imageSrc, description)}
    >
      <Meta title={title} description={<span dangerouslySetInnerHTML={{ __html: price }} />} />
    </Card>
  );

  return (
    <div className='menu'>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img
          alt="banner"
          src={require("./images/coffee1.jpg")}
          style={{ width: '100%', height: '300px', objectFit: 'cover'}}
        />
        <h1 className='title' style={{ fontSize: '38px' }}>GOGO PRESSO</h1>
        <p className="subtitle" style={{ fontSize: '25px' }}>咖啡</p>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ textAlign: 'center', fontSize: '48px' }} className='name'>    </h2>
        <div className='cardContainer'>
          {renderCard("美式咖啡", "熱(大) $55 | 熱(中) $45 <br> 冰(大) $65 | 冰(中) $55", require("./menuImage/11.jpg"), "一款經典而怡人的咖啡，以其簡潔清爽的口感和迷人的香氣而備受推崇。採用新鮮研磨的優質咖啡豆，透過緩慢的沖泡過程，釋放出咖啡的醇厚味道和芬芳香氣。")}
          {renderCard("經典拿鐵咖啡", "熱(大) $65 | 熱(中) $55 <br> 冰(大) $75 | 冰(中) $65", require("./menuImage/25.jpg"), "我們精選上等的咖啡豆，經過精心烘焙和磨製，與新鮮牛奶和輕盈奶泡相融合，牛奶的柔和以及奶泡的絲滑，呈現出令人陶醉的口味。")}
          {renderCard("摩卡咖啡", "熱(大) $75 | 熱(中) $65 <br> 冰(大) $85 | 冰(中) $75", require("./menuImage/26.jpg"), "我們精選的頂級摩卡咖啡豆，與純正的巧克力融合，使得每一口都充滿了濃郁咖啡香氣和深邃的巧克力味道。這款咖啡以其豐富的口感和醇厚的味道而著稱，為您帶來獨特的享受體驗。")}
          {renderCard("西西里咖啡", "冰(大) $65 | 冰(中) $55", require("./menuImage/1.jpg"), "我們精選西西里島的上等咖啡豆，經過特殊的烘焙工藝，帶來獨特的風味和豐富的口感。這款咖啡以其深沉的香氣和濃鬱的味道而著稱，散發著地中海的風情和熱情。")}
        </div>
        <div className='cardContainer'>
          {renderCard("espresso濃縮", "熱 $45", require("./menuImage/7.jpg"), "精選優質的咖啡豆，透過高壓水蒸氣的方式將熱水擠壓通過咖啡粉，使咖啡豆中的精華盡數釋放，帶來濃郁的咖啡香氣和濃厚的口感。")}
          {renderCard("拉霸拿鐵", "熱 $95", require("./menuImage/6.jpg"), "精選優質的咖啡豆，搭配新鮮的牛奶和奶泡，經過精心調配和調味，呈現出柔和的咖啡香氣和濃郁的牛奶味道。每一口都帶來如絲般順滑的口感，是咖啡愛好者不可錯過的一款經典飲品。")}
          {renderCard("阿法卡朵", "熱 $85", require("./menuImage/3.jpg"), "我們選擇上等的阿拉比卡咖啡豆，經過精心烘焙和細緻的研磨，與鮮奶和奶泡混合，以特殊的比例調配，呈現出絲滑順口的口感和豐富的咖啡香氣。")}
          {renderCard("手沖咖啡SOE", "$95杯 | $180壺", require("./menuImage/2.jpg"), "採用精心挑選的高品質咖啡豆，透過手工沖泡的方式展現了咖啡的純粹本質。每一杯手沖咖啡都是由咖啡師精心調配，精準控制水溫和沖泡時間，以確保最佳的口感和香氣。")}
        </div>
        <p style={{ textAlign: 'center', fontSize: '20px' }} className='heighlight'>SOE自家新鮮烘豆養豆需3~5天 預定請洽詢豆單</p>
      </div>

      <Modal
        title={modalContent.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        className={isInitialModal ? 'initial-modal' : ''}
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

export default CoffeePage;
