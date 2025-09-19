import React from 'react';
import { Link } from 'react-router-dom';
import './Page2.css';

const Page2 = () => {
  return (
    <div className="page-container">
      {/* Vietnamese Traditional Elements */}
      <div className="vietnamese-decorations">
        <div className="dragon-left">
          <svg viewBox="0 0 200 100" className="dragon-svg">
            <path d="M10,50 Q50,20 100,50 Q150,80 190,50" stroke="#D4AF37" strokeWidth="3" fill="none" opacity="0.6"/>
            <circle cx="190" cy="50" r="8" fill="#D4AF37" opacity="0.8"/>
          </svg>
        </div>
        <div className="dragon-right">
          <svg viewBox="0 0 200 100" className="dragon-svg">
            <path d="M190,50 Q150,20 100,50 Q50,80 10,50" stroke="#D4AF37" strokeWidth="3" fill="none" opacity="0.6"/>
            <circle cx="10" cy="50" r="8" fill="#D4AF37" opacity="0.8"/>
          </svg>
        </div>
      </div>

      {/* Particles Container */}
      <div id="particles-container" className="particles-container"></div>

      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Trang chủ</Link>
            <span className="breadcrumb-separator">❋</span>
            <span className="breadcrumb-current">Mặt trận Việt Minh</span>
          </div>
          <h1 className="page-title">Tân Tỵ - Mặt trận Việt Minh</h1>
          <div className="page-subtitle">Tập hợp sức mạnh toàn dân tộc trong cuộc thánh chiến giành độc lập</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="page-main">
        {/* Introduction Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">⚔️</div>
            <h2>Bối cảnh thành lập</h2>
          </div>
          <div className="content-box">
            <p className="lead-text">
              Ngày 19 tháng 5 năm 1941, tại Pác Bó (Cao Bằng), dưới sự lãnh đạo của đồng chí Nguyễn Ái Quốc, 
              Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh) được thành lập nhằm tập hợp toàn dân tộc đấu tranh giành độc lập.
            </p>
            <div className="highlight-quote">
              <blockquote>
                "Đoàn kết - Đoàn kết - Đại đoàn kết"
              </blockquote>
              <cite>- Chủ tịch Hồ Chí Minh</cite>
            </div>
          </div>
        </section>

        {/* Tư tưởng đoàn kết Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">🤝</div>
            <h2>Tư tưởng đại đoàn kết trong Mặt trận Việt Minh</h2>
          </div>
          <div className="content-box">
            <h3>1. Đoàn kết không phân biệt giai cấp</h3>
            <p>
              Hồ Chí Minh chủ trương tập hợp tất cả các tầng lớp nhân dân yêu nước, từ công nhân, nông dân, 
              trí thức đến các nhà tư sản dân tộc, tiểu thương, tiểu chủ. Người nhấn mạnh: "Ai có tài, có đức, 
              có lòng yêu nước, thương dân thì ta đoàn kết với họ".
            </p>

            <h3>2. Đoàn kết không phân biệt tôn giáo</h3>
            <p>
              Mặt trận Việt Minh tập hợp cả Phật giáo, Công giáo, Cao Đài, Hòa Hảo và các tôn giáo khác. 
              Hồ Chí Minh luôn tôn trọng tự do tín ngưỡng và coi đây là quyền thiêng liêng của mỗi người.
            </p>

            <h3>3. Đoàn kết không phân biệt dân tộc</h3>
            <p>
              Mặt trận Việt Minh tập hợp tất cả các dân tộc anh em trên đất nước Việt Nam. 
              Người khẳng định: "Việt Nam là một, dân tộc Việt Nam là một".
            </p>

            <h3>4. Đoàn kết không phân biệt giới tính</h3>
            <p>
              Hồ Chí Minh đặc biệt chú ý đến vai trò của phụ nữ trong cách mạng. Người nói: 
              "Non sông gấm vóc Việt Nam do phụ nữ ta, trẻ cũng như già, ra sức dệt thêu mà thêm tốt đẹp, rực rỡ".
            </p>
          </div>
        </section>

        {/* Phương thức hoạt động Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">🎯</div>
            <h2>Phương thức hoạt động của Mặt trận</h2>
          </div>
          <div className="content-box">
            <div className="method-cards">
              <div className="method-card">
                <div className="method-icon">📢</div>
                <h4>Tuyên truyền, giáo dục</h4>
                <p>Giác ngộ quần chúng về mục tiêu độc lập dân tộc và đoàn kết toàn dân.</p>
              </div>
              <div className="method-card">
                <div className="method-icon">🏗️</div>
                <h4>Xây dựng tổ chức</h4>
                <p>Thành lập các đoàn thể cứu quốc trong từng tầng lớp nhân dân.</p>
              </div>
              <div className="method-card">
                <div className="method-icon">⚡</div>
                <h4>Đấu tranh chính trị</h4>
                <p>Kết hợp đấu tranh chính trị với chuẩn bị lực lượng vũ trang.</p>
              </div>
              <div className="method-card">
                <div className="method-icon">🌍</div>
                <h4>Đoàn kết quốc tế</h4>
                <p>Liên minh với các lực lượng dân chủ và tiến bộ trên thế giới.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Thành tựu Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">🏆</div>
            <h2>Thành tựu của Mặt trận Việt Minh</h2>
          </div>
          <div className="content-box">
            <div className="achievement-timeline">
              <div className="achievement-item">
                <div className="achievement-year">1941-1945</div>
                <div className="achievement-content">
                  <h4>Xây dựng căn cứ địa cách mạng</h4>
                  <p>Thành lập và phát triển các căn cứ địa ở Việt Bắc, Tây Bắc, làm nền tảng cho cuộc khởi nghĩa.</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-year">1944</div>
                <div className="achievement-content">
                  <h4>Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân</h4>
                  <p>Tiền thân của Quân đội Nhân dân Việt Nam, đánh dấu sự ra đời của lực lượng vũ trang cách mạng.</p>
                </div>
              </div>
              <div className="achievement-item">
                <div className="achievement-year">1945</div>
                <div className="achievement-content">
                  <h4>Cách mạng Tháng Tám thành công</h4>
                  <p>Mặt trận Việt Minh lãnh đạo toàn dân tộc giành thắng lợi trong cuộc Tổng khởi nghĩa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bài học Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">📚</div>
            <h2>Bài học về đoàn kết</h2>
          </div>
          <div className="content-box">
            <div className="lesson-principles">
              <div className="principle-item">
                <div className="principle-number">01</div>
                <div className="principle-content">
                  <h4>Đoàn kết là sức mạnh vô địch</h4>
                  <p>Khi toàn dân tộc đoàn kết một lòng, không có kẻ thù nào có thể đánh bại được.</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-number">02</div>
                <div className="principle-content">
                  <h4>Đoàn kết phải có mục tiêu rõ ràng</h4>
                  <p>Độc lập dân tộc và tự do hạnh phúc của nhân dân là mục tiêu chung thu hút mọi người.</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-number">03</div>
                <div className="principle-content">
                  <h4>Đoàn kết phải có tổ chức chặt chẽ</h4>
                  <p>Mặt trận Việt Minh là hình thức tổ chức đoàn kết hiệu quả nhất.</p>
                </div>
              </div>
              <div className="principle-item">
                <div className="principle-number">04</div>
                <div className="principle-content">
                  <h4>Đoàn kết phải có lãnh đạo sáng suốt</h4>
                  <p>Đảng Cộng sản Việt Nam là hạt nhân lãnh đạo của khối đại đoàn kết.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="navigation-section">
          <div className="nav-buttons">
            <Link to="/page1" className="nav-button nav-button-prev">
              <i className="fas fa-arrow-left"></i>
              Trước đó: Thành lập Đảng
            </Link>
            <Link to="/" className="nav-button nav-button-home">
              <i className="fas fa-home"></i>
              Về trang chủ
            </Link>
            <Link to="/page3" className="nav-button nav-button-next">
              Tiếp theo: Mặt trận Liên Việt
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page2;
