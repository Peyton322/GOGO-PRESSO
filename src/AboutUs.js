import React from 'react';
import { Divider } from 'antd';
import './AboutUs.css'; // 引入 CSS 文件

const AboutUs = () => (
  <div className="about-us">
    <div className="image-container">
      <img
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        src={require("./images/coffee.jpg")}
        alt="Coffee"
      />
      <h1 className="title" style={{fontSize:'38px'}}>GOGO PRESSO</h1>
      <p className="subtitle" style={{fontSize:'20px'}}>關於我們</p>
    </div>
    <div className='flex-container'>
      <Divider orientation="left">創辦故事</Divider>
      <p className="story-text">
        GOGO PRESSO 由三位熱愛咖啡的朋友於 2015 年創立。他們相識於一次咖啡品鑒會，因為對咖啡的熱愛而一拍即合，決定共同創立一個能夠分享他們對咖啡熱情的場所。起初，他們只是一間小小的咖啡館，靠著彼此對咖啡的熱情和對品質的堅持，一步一步發展壯大。他們的目標是創造一個讓人們能夠逃離都市喧囂，享受頂級咖啡並放鬆心靈的場所。從最初的夢想到現在，我們一路堅持初心，為顧客帶來每一杯充滿愛與用心的咖啡。
      </p>
      <Divider orientation="left">使命與願景</Divider>
      <p className="story-text">
        我們的使命是提供高品質的咖啡和溫馨的環境，讓每一位顧客都能感受到我們的用心與熱情。我們堅信，每一杯咖啡都是一種藝術創作，應該被用心對待。我們的願景是成為本地社區的咖啡文化中心，推動可持續的咖啡產業發展。我們致力於支持公平貿易，確保我們的咖啡豆來自於負責任的供應鏈，同時積極參與環保活動，減少對環境的影響。
      </p>
      <Divider orientation="left">特色產品</Divider>
      <p className="story-text">
        我們的咖啡豆來自全球各地經過精挑細選的頂級產地，並由我們經驗豐富的咖啡師進行精心烘焙。每一批咖啡豆都經過嚴格測試，以確保最佳的風味和質量。我們的招牌產品包括經典的意式濃縮、美式咖啡、拿鐵、卡布奇諾等，還有我們獨創的特色飲品如手沖咖啡、冷萃咖啡和特色調味咖啡。
        <br/>
        <br/>
        除了咖啡飲品，我們還提供美味的甜點和輕食。我們的甜點包括手工製作的蛋糕、餅乾和其他各式甜點，滿足不同口味的需求。輕食部分則提供多種新鮮健康的選擇，如三明治、沙拉和小點心，是您忙碌生活中的美味補給。
      </p>
      <Divider orientation="left">我們的團隊</Divider>
      <p className="story-text">
        我們的團隊由一群熱愛咖啡的專業人士組成，每一位咖啡師都經過嚴格培訓，擁有豐富的專業知識和技術。他們不僅能夠製作出完美的咖啡，還能夠向顧客介紹咖啡的背後故事和知識。我們的服務團隊始終以顧客為中心，提供親切且周到的服務。我們相信，每一位顧客都是我們的朋友，我們致力於為每一位顧客帶來愉快的咖啡體驗。
      </p>
    </div>
  </div>
);

export default AboutUs;
