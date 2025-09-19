import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header data-aos="fade-down" data-aos-duration="1200" className="historical-header">
      <div className="header-crown">
        <div className="crown-center">
          <div className="vietnamese-emblem">
            <div className="star-emblem">⭐</div>
            <div className="emblem-text">VIỆT NAM</div>
          </div>
        </div>
        <div className="crown-left"></div>
        <div className="crown-right"></div>
      </div>
      
      <div className="header-content">
        <div className="chapter-number vietnamese-chapter">
          <span className="chapter-decoration">❋</span>
          Chương V
          <span className="chapter-decoration">❋</span>
        </div>
        <h1 className="main-title historical-title calligraphy-title">
          <span className="title-line">Tư tưởng Hồ Chí Minh</span>
          <span className="title-line">về đại đoàn kết toàn dân tộc</span>
          <span className="title-line">và đoàn kết quốc tế</span>
        </h1>
        <div className="title-underline">
          <div className="underline-decoration">🏛️ ❋ 🏛️</div>
        </div>
        <div className="quote-container">
          <div className="quote-decoration-left">🌸</div>
          <p className="quote historical-quote calligraphy-quote">
            "Đoàn kết là sức mạnh, là then chốt của thành công"
          </p>
          <div className="quote-decoration-right">🌸</div>
        </div>
        <div className="quote-author">
          <span className="author-decoration">✦</span>
          Chủ tịch Hồ Chí Minh
          <span className="author-decoration">✦</span>
        </div>
      </div>
      
      <div className="scroll-indicator historical-scroll">
        <div className="scroll-text">Khám phá lịch sử</div>
        <i className="fas fa-chevron-down"></i>
      </div>
    </header>
  );
};

export default Header;
