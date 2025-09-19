import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      year: "1930",
      title: "Canh Ngọ - Thành lập Đảng Cộng sản Việt Nam",
      description:
        "Sự kiện thiêng liêng đánh dấu sự ra đời của Đảng Cộng sản Việt Nam, mở ra kỷ nguyên mới cho dân tộc Việt Nam anh hùng.",
      quote: "Đảng ta sinh ra để phục vụ Tổ quốc và nhân dân",
      image: "/images/Leftpicture.jpg",
      imageAlt: "Thành lập Đảng",
      link: "/page1",
      icon: "fas fa-scroll",
      seal: "🏛️",
      decoration: "🏛️",
    },
    {
      year: "1941",
      title: "Tân Tỵ - Mặt trận Việt Minh",
      description:
        "Mặt trận Việt Minh được thành lập, tập hợp sức mạnh toàn dân tộc trong cuộc thánh chiến giành độc lập.",
      quote: "Đoàn kết - Đoàn kết - Đại đoàn kết",
      image: "/images/Leftpicture.jpg",
      imageAlt: "Mặt trận Việt Minh",
      link: "/page2",
      icon: "fas fa-people-group",
      seal: "⚔️",
      decoration: "⚔️",
    },
    {
      year: "1951",
      title: "Tân Mão - Mặt trận Liên Việt",
      description:
        "Mặt trận Liên Việt ra đời, tiếp tục phát huy truyền thống đại đoàn kết dân tộc trong thời kỳ xây dựng đất nước.",
      quote: "Dân tộc Việt Nam là một khối thống nhất",
      image: "/images/Leftpicture.jpg",
      imageAlt: "Mặt trận Liên Việt",
      link: "/page3",
      icon: "fas fa-landmark",
      seal: "🏮",
      decoration: "🏮",
    },
  ];

  return (
    <div className="timeline-container historical-timeline">
      {/* Ancient Scroll Header */}
      <div className="timeline-header ancient-scroll-header">
        <div className="scroll-ornament scroll-ornament-left">🐉</div>
        <div className="timeline-title-container">
          <div className="ancient-seal">⚜️</div>
          <h2 className="timeline-title ancient-title">Sử Ký Đại Đoàn Kết</h2>
          <div className="timeline-subtitle ancient-subtitle">
            <span className="subtitle-decoration">❋</span>
            Những mốc son thiêng liêng trong lịch sử dân tộc
            <span className="subtitle-decoration">❋</span>
          </div>
          <div className="ancient-seal">⚜️</div>
        </div>
        <div className="scroll-ornament scroll-ornament-right">🐉</div>
      </div>

      {/* Ancient Timeline Scroll */}
      <div className="timeline ancient-timeline">
        <div className="timeline-line ancient-scroll-line"></div>
        <div className="timeline-scroll-top">📜</div>
        <div className="timeline-scroll-bottom">📜</div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            } ancient-timeline-item`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-year={item.year}
          >
            <div className="timeline-icon ancient-icon">
              <div className="icon-background">
                <i className={item.icon}></i>
              </div>
              <div className="icon-glow"></div>
            </div>
            <div className="timeline-content ancient-content">
              <div className="content-seal">{item.seal}</div>
              <h3 className="ancient-event-title">{item.title}</h3>
              <div className="timeline-image ancient-image">
                <div className="image-frame-ancient">
                  <img src={item.image} alt={item.imageAlt} />
                  <div className="image-border-decoration">
                    <div className="corner-ornament top-left">❋</div>
                    <div className="corner-ornament top-right">❋</div>
                    <div className="corner-ornament bottom-left">❋</div>
                    <div className="corner-ornament bottom-right">❋</div>
                  </div>
                </div>
              </div>
              <div className="ancient-text">
                <p className="event-description">{item.description}</p>
                <div className="ancient-quote">
                  <span className="quote-mark">❝</span>
                  <em>{item.quote}</em>
                  <span className="quote-mark">❞</span>
                </div>
              </div>
              <Link to={item.link} className="historical-link ancient-link">
                <span className="link-decoration">{item.decoration}</span>
                Khám phá thêm
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
