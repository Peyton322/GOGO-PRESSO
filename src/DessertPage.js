import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'antd';
import './dessert.css';
import './allmenu.css'



const { Meta } = Card;

const DessertPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = (title, imageSrc, description) => {
    setModalContent({ title, imageSrc, description });
    setIsModalVisible(true);
  };

  const showModal2 = (description, imageSrc) => {
    setModalContent({ description, imageSrc });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    // 页面加载时显示模态窗口
    showModal2("🎂 每日推出新鮮手作甜點蛋糕依蛋糕櫃為主\n預購生日甜點蛋糕製作需2~3天 歡迎預訂洽詢\n可電話預約或是到預定頁面訂購\n☎️0917-075-427");
  }, []);

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
          src={require("./images/cake2.jpg")}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <h1 className='title' style={{ fontSize: '38px' }}>GOGO PRESSO</h1>
        <p className="subtitle" style={{ fontSize: '25px' }}>甜點</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ textAlign: 'center', fontSize: '20px' }} className='heighlight'>每日推出新鮮手作甜點蛋糕依蛋糕櫃為主</p>
        <div className='cardContainer'>
          {renderCard("司康 $45", require("./menuImage/16.jpg"), "成分：麵粉 奶油 鮮奶 雞蛋 糖 鹽")}
          {renderCard("可麗露 $65", require("./menuImage/12.jpg"), "成分：麵粉 牛奶 雞蛋 奶油 糖 香草 蘭姆酒")}
          {renderCard("巧克力布朗尼 $58", require("./menuImage/17.jpg"), "成分：黑巧克力 奶油 雞蛋 麵粉 可可粉 鹽 香草精")}
          {renderCard("雪球 $65 (6顆裝)", require("./menuImage/8.jpg"), "成分：麵粉 奶油 糖粉 香草精 鹽 核桃 杏仁")}
        </div>
        <div className='cardContainer'>
          {renderCard("檸檬磅蛋糕 $50", require("./menuImage/18.jpg"), "成分：麵粉 奶油 糖 雞蛋 牛奶 檸檬汁 檸檬皮 香草精 鹽 發酵粉")}
          {renderCard("瑪德蓮 $35", require("./menuImage/19.jpg"), "成分：麵粉 奶油 糖、雞蛋 蜂蜜 香草精 檸檬皮 鹽 發酵粉")}
          {renderCard("檸檬塔 $85", require("./menuImage/4.jpg"), "成分：麵粉 奶油 糖 雞蛋 檸檬汁 檸檬皮 鹽 香草精 奶油")}
          {renderCard("達克瓦茲 $65", require("./menuImage/10.jpg"), "成分：杏仁粉 蛋白 糖粉 細砂糖 麵粉 奶油 奶油 香草精 鹽")}
        </div>
        <div className='cardContainer'>
          {renderCard("原味巴斯克乳酪 $58", require("./menuImage/24.jpg"), "6吋 $380 需預訂\n 成分：奶油乳酪 鮮奶油 糖 雞蛋 麵粉 香草精 鹽")}
          {renderCard("咖啡巴斯克乳酪 $68", require("./menuImage/14.jpg"), "6吋 $430 需預訂\n 成分：奶油乳酪 鮮奶油 糖 雞蛋 麵粉 濃縮咖啡 香草精 鹽")}
          {renderCard("巧克力巴斯克乳酪 $78", require("./menuImage/15.jpeg"), "6吋 $458 需預訂\n 成分：奶油乳酪 鮮奶油 糖 雞蛋 麵粉 可可粉 香草精 鹽")}
        </div>
        <p style={{ textAlign: 'center', fontSize: '20px' }} className='heighlight'>預購生日甜點蛋糕製作需2~3天 歡迎預訂洽詢</p>
      </div>
      <Modal
        title={modalContent.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <div className={`modal-description ${modalContent.imageSrc ? '' : 'modal-description-centered'}`}>
          {modalContent.description ? modalContent.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          )) : null}
        </div>
      </Modal>
    </div>
  );
};

export default DessertPage;
