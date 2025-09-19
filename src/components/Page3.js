import React from "react";
import { Link } from "react-router-dom";
import "./Page3.css";

const Page3 = () => {
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
            <span className="breadcrumb-current">Mặt trận Liên Việt</span>
          </div>
          <h1 className="page-title">Tân Mão - Mặt trận Liên Việt</h1>
          <div className="page-subtitle">
            Tiếp tục phát huy truyền thống đại đoàn kết dân tộc trong thời kỳ
            xây dựng đất nước
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="page-main">
        {/* Introduction Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">🏮</div>
            <h2>Bối cảnh thành lập</h2>
          </div>
          <div className="content-box">
            <p className="lead-text">
              Ngày 3 tháng 3 năm 1951, tại Việt Bắc, Mặt trận Liên Việt được
              thành lập trên cơ sở hợp nhất Mặt trận Việt Minh và Hội Liên Việt,
              nhằm tập hợp toàn dân tộc trong cuộc kháng chiến chống thực dân
              Pháp và xây dựng đất nước.
            </p>
            <div className="highlight-quote">
              <blockquote>"Dân tộc Việt Nam là một khối thống nhất"</blockquote>
              <cite>- Chủ tịch Hồ Chí Minh</cite>
            </div>
          </div>
        </section>

        {/* Tư tưởng đoàn kết Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">🤝</div>
            <h2>Tư tưởng đại đoàn kết trong thời kỳ kháng chiến</h2>
          </div>
          <div className="content-box">
            <h3>1. Đoàn kết trong kháng chiến</h3>
            <p>
              Mặt trận Liên Việt tập hợp toàn dân tộc trong cuộc kháng chiến
              chống thực dân Pháp. Hồ Chí Minh nhấn mạnh: "Kháng chiến là sự
              nghiệp của toàn dân, không phải của riêng ai".
            </p>

            <h3>2. Đoàn kết trong xây dựng</h3>
            <p>
              Song song với kháng chiến, Mặt trận Liên Việt cũng tập hợp nhân
              dân xây dựng đất nước. Người nói: "Vừa kháng chiến, vừa kiến quốc"
              - vừa đánh giặc, vừa xây dựng đất nước.
            </p>

            <h3>3. Đoàn kết các tầng lớp nhân dân</h3>
            <p>
              Mặt trận Liên Việt tập hợp công nhân, nông dân, trí thức, tiểu tư
              sản, tư sản dân tộc và các thành phần khác trong một khối đoàn kết
              thống nhất.
            </p>

            <h3>4. Đoàn kết các dân tộc anh em</h3>
            <p>
              Mặt trận Liên Việt đặc biệt chú trọng đoàn kết các dân tộc thiểu
              số, coi đây là một trong những nhân tố quan trọng của thắng lợi
              cách mạng.
            </p>
          </div>
        </section>

        {/* Hoạt động của Mặt trận Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">⚡</div>
            <h2>Hoạt động của Mặt trận Liên Việt</h2>
          </div>
          <div className="content-box">
            <div className="activity-grid">
              <div className="activity-card">
                <div className="activity-icon">🛡️</div>
                <h4>Động viên nhân dân kháng chiến</h4>
                <p>
                  Tập hợp và động viên toàn dân tham gia cuộc kháng chiến chống
                  thực dân Pháp.
                </p>
              </div>
              <div className="activity-card">
                <div className="activity-icon">🏗️</div>
                <h4>Xây dựng hậu phương</h4>
                <p>
                  Phát triển kinh tế, văn hóa, giáo dục ở vùng tự do để phục vụ
                  kháng chiến.
                </p>
              </div>
              <div className="activity-card">
                <div className="activity-icon">🌾</div>
                <h4>Cải cách ruộng đất</h4>
                <p>
                  Thực hiện cải cách ruộng đất để giải phóng nông dân và tăng
                  cường đoàn kết.
                </p>
              </div>
              <div className="activity-card">
                <div className="activity-icon">📚</div>
                <h4>Phát triển giáo dục</h4>
                <p>
                  Xóa nạn mù chữ và phát triển giáo dục để nâng cao dân trí.
                </p>
              </div>
              <div className="activity-card">
                <div className="activity-icon">🏥</div>
                <h4>Chăm sóc sức khỏe</h4>
                <p>Phát triển y tế và chăm sóc sức khỏe nhân dân.</p>
              </div>
              <div className="activity-card">
                <div className="activity-icon">🌍</div>
                <h4>Đoàn kết quốc tế</h4>
                <p>
                  Liên minh với các lực lượng hòa bình và tiến bộ trên thế giới.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thành tựu Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">🏆</div>
            <h2>Thành tựu của Mặt trận Liên Việt</h2>
          </div>
          <div className="content-box">
            <div className="achievement-stats">
              <div className="stat-item">
                <div className="stat-number">9 năm</div>
                <div className="stat-label">Kháng chiến thành công</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Dân số được tập hợp</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Các dân tộc đoàn kết</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Tinh thần đoàn kết</div>
              </div>
            </div>

            <div className="achievement-details">
              <h3>Những thành tựu cụ thể:</h3>
              <ul className="achievement-list">
                <li>
                  Thắng lợi trong cuộc kháng chiến chống thực dân Pháp
                  (1946-1954)
                </li>
                <li>
                  Thành công trong cải cách ruộng đất, giải phóng nông dân
                </li>
                <li>
                  Phát triển giáo dục, xóa nạn mù chữ cho hàng triệu người
                </li>
                <li>Xây dựng được hệ thống chính quyền nhân dân vững mạnh</li>
                <li>Tạo nên khối đại đoàn kết toàn dân tộc bền vững</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bài học và ý nghĩa Section */}
        <section className="content-section">
          <div className="section-header">
            <div className="section-icon">📖</div>
            <h2>Bài học và ý nghĩa lịch sử</h2>
          </div>
          <div className="content-box">
            <div className="lesson-summary">
              <h3>
                Tư tưởng đại đoàn kết của Hồ Chí Minh thể hiện qua Mặt trận Liên
                Việt:
              </h3>

              <div className="lesson-points">
                <div className="lesson-point">
                  <div className="point-icon">🎯</div>
                  <div className="point-content">
                    <h4>Đoàn kết có mục tiêu rõ ràng</h4>
                    <p>
                      Độc lập dân tộc và tự do hạnh phúc của nhân dân là mục
                      tiêu chung thu hút mọi người.
                    </p>
                  </div>
                </div>

                <div className="lesson-point">
                  <div className="point-icon">🤝</div>
                  <div className="point-content">
                    <h4>Đoàn kết không phân biệt</h4>
                    <p>
                      Không phân biệt giai cấp, tôn giáo, dân tộc, giới tính -
                      ai yêu nước đều được đoàn kết.
                    </p>
                  </div>
                </div>

                <div className="lesson-point">
                  <div className="point-icon">⚖️</div>
                  <div className="point-content">
                    <h4>Đoàn kết có nguyên tắc</h4>
                    <p>
                      Đoàn kết trên cơ sở lợi ích chung của dân tộc, không phải
                      đoàn kết vô nguyên tắc.
                    </p>
                  </div>
                </div>

                <div className="lesson-point">
                  <div className="point-icon">🌟</div>
                  <div className="point-content">
                    <h4>Đoàn kết có lãnh đạo</h4>
                    <p>
                      Đảng Cộng sản Việt Nam là hạt nhân lãnh đạo của khối đại
                      đoàn kết toàn dân tộc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="navigation-section">
          <div className="nav-buttons">
            <Link to="/page2" className="nav-button nav-button-prev">
              <i className="fas fa-arrow-left"></i>
              Trước đó: Mặt trận Việt Minh
            </Link>
            <Link to="/" className="nav-button nav-button-home">
              <i className="fas fa-home"></i>
              Về trang chủ
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page3;
