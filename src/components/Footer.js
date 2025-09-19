import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="historical-footer">
      <div className="footer-content">
        <div className="footer-header">
          <div className="footer-logo">
            <i className="fas fa-book-open"></i>
            <span>Lịch Sử Việt Nam</span>
          </div>
          <div className="footer-quote">
            "Dân tộc Việt Nam là một, sông có thể cạn, núi có thể mòn, 
            song chân lý ấy không bao giờ thay đổi"
          </div>
        </div>
        <div className="footer-body">
          <div className="footer-section">
            <h4>Khám phá thêm</h4>
            <ul>
              <li><a href="/page1">Thành lập Đảng Cộng sản</a></li>
              <li><a href="/page2">Mặt trận Việt Minh</a></li>
              <li><a href="/page3">Mặt trận Liên Việt</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Tư tưởng Hồ Chí Minh</h4>
            <ul>
              <li>Đại đoàn kết dân tộc</li>
              <li>Đoàn kết quốc tế</li>
              <li>Xây dựng đất nước</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Liên kết</h4>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2024 Lịch Sử Việt Nam. Tất cả quyền được bảo lưu.
          </div>
          <div className="footer-author">
            Được tạo ra với tình yêu lịch sử dân tộc
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
