import React from "react";
import { Link } from "react-router-dom";
import "./Page1.css";

const Page1 = () => {
  return (
    <div className="page-container">
      {/* Vietnamese Traditional Elements */}
      <div className="vietnamese-decorations">
        <div className="dragon-left">
          <svg viewBox="0 0 200 100" className="dragon-svg">
            <path
              d="M10,50 Q50,20 100,50 Q150,80 190,50"
              stroke="#D4AF37"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <circle cx="190" cy="50" r="8" fill="#D4AF37" opacity="0.8" />
          </svg>
        </div>
        <div className="dragon-right">
          <svg viewBox="0 0 200 100" className="dragon-svg">
            <path
              d="M190,50 Q150,20 100,50 Q50,80 10,50"
              stroke="#D4AF37"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <circle cx="10" cy="50" r="8" fill="#D4AF37" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Particles Container */}
      <div id="particles-container" className="particles-container"></div>

      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              Trang chủ
            </Link>
            <span className="breadcrumb-separator">❋</span>
            <span className="breadcrumb-current">
              Thành lập Đảng Cộng sản Việt Nam
            </span>
          </div>
          <h1 className="page-title">
            Canh Ngọ - Thành lập Đảng Cộng sản Việt Nam
          </h1>
          <div className="page-subtitle">
            Sự kiện thiêng liêng đánh dấu sự ra đời của Đảng Cộng sản Việt Nam
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="page-main">
        {/* Introduction Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">🏛️</div>
            <h2>Bối cảnh lịch sử</h2>
          </div>
          <div className="content-box">
            <p className="lead-text">
              Ngày 3 tháng 2 năm 1930, tại Hồng Kông, dưới sự chủ trì của đồng
              chí Nguyễn Ái Quốc (Hồ Chí Minh), ba tổ chức cộng sản ở Việt Nam
              đã hợp nhất thành một đảng duy nhất - Đảng Cộng sản Việt Nam.
            </p>
            <div className="highlight-quote">
              <blockquote>
                "Đảng ta sinh ra để phục vụ Tổ quốc và nhân dân"
              </blockquote>
              <cite>- Chủ tịch Hồ Chí Minh</cite>
            </div>
          </div>
        </section>

        {/* Tư tưởng đoàn kết Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">🤝</div>
            <h2>Tư tưởng đoàn kết trong việc thành lập Đảng</h2>
          </div>
          <div className="content-box">
            <h3>1. Đoàn kết các tổ chức cách mạng</h3>
            <p>
              Hồ Chí Minh đã nhận thức sâu sắc rằng để cách mạng thành công, cần
              phải đoàn kết tất cả các lực lượng cách mạng. Việc hợp nhất ba tổ
              chức cộng sản (Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng,
              Đông Dương Cộng sản Liên đoàn) thành một đảng thống nhất thể hiện
              tư tưởng đoàn kết của Người.
            </p>

            <h3>2. Đoàn kết giai cấp công nhân và nông dân</h3>
            <p>
              Trong Cương lĩnh chính trị đầu tiên của Đảng, Hồ Chí Minh đã xác
              định liên minh công - nông là nền tảng của cách mạng. Người nhấn
              mạnh: "Cách mạng là sự nghiệp của quần chúng, không phải của cá
              nhân anh hùng nào".
            </p>

            <h3>3. Đoàn kết toàn dân tộc</h3>
            <p>
              Hồ Chí Minh đã đặt nền móng cho tư tưởng đại đoàn kết toàn dân tộc
              ngay từ khi thành lập Đảng. Người chủ trương tập hợp tất cả các
              tầng lớp nhân dân yêu nước, không phân biệt giai cấp, tôn giáo,
              dân tộc.
            </p>
          </div>
        </section>

        {/* Ý nghĩa lịch sử Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">⭐</div>
            <h2>Ý nghĩa lịch sử và bài học</h2>
          </div>
          <div className="content-box">
            <div className="lesson-cards">
              <div className="lesson-card">
                <div className="lesson-icon">🎯</div>
                <h4>Thống nhất lãnh đạo</h4>
                <p>
                  Việc thành lập một đảng duy nhất đã tạo ra sự thống nhất trong
                  lãnh đạo cách mạng, tránh được sự phân tán lực lượng.
                </p>
              </div>
              <div className="lesson-card">
                <div className="lesson-icon">🌍</div>
                <h4>Kết hợp dân tộc và quốc tế</h4>
                <p>
                  Đảng vừa đại diện cho lợi ích dân tộc Việt Nam, vừa là một bộ
                  phận của phong trào cách mạng thế giới.
                </p>
              </div>
              <div className="lesson-card">
                <div className="lesson-icon">💪</div>
                <h4>Sức mạnh đoàn kết</h4>
                <p>
                  Đoàn kết là sức mạnh vô địch, là then chốt của thành công
                  trong mọi cuộc đấu tranh cách mạng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tư liệu Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">📚</div>
            <h2>Tư liệu lịch sử</h2>
          </div>
          <div className="content-box">
            <div className="document-grid">
              <div className="document-item">
                <div className="document-icon">📄</div>
                <h4>Cương lĩnh chính trị đầu tiên</h4>
                <p>
                  Văn kiện quan trọng nhất của Đảng, thể hiện đường lối cách
                  mạng và tư tưởng đoàn kết của Hồ Chí Minh.
                </p>
              </div>
              <div className="document-item">
                <div className="document-icon">📜</div>
                <h4>Điều lệ Đảng</h4>
                <p>
                  Quy định về tổ chức, nguyên tắc hoạt động và mối quan hệ đoàn
                  kết trong Đảng.
                </p>
              </div>
              <div className="document-item">
                <div className="document-icon">📖</div>
                <h4>Chính cương vắn tắt</h4>
                <p>
                  Tài liệu tóm tắt đường lối cách mạng, nhấn mạnh vai trò của
                  đoàn kết toàn dân.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="navigation-section">
          <div className="nav-buttons">
            <Link to="/" className="nav-button nav-button-home">
              <i className="fas fa-home"></i>
              Về trang chủ
            </Link>
            <Link to="/page2" className="nav-button nav-button-next">
              Tiếp theo: Mặt trận Việt Minh
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page1;
