import React from "react";
import Header from "./Header";
import Section from "./Section";
import Timeline from "./Timeline";
import Footer from "./Footer";
import References from "./References";

const HomePage = () => {
  const sectionsData = [
    {
      number: "01",
      title: "Lực lượng của khối đại đoàn kết toàn dân tộc",
      description:
        "Khám phá sức mạnh to lớn của khối đại đoàn kết dân tộc trong lịch sử Việt Nam.",
      highlight: "Đoàn kết là sức mạnh vô địch",
      icon: "fas fa-users",
      image: "/images/Leftpicture.jpg",
      imageAlt: "Lực lượng đoàn kết",
      overlayText: "Lực lượng đoàn kết",
    },
    {
      number: "02",
      title: "Phương thức xây dựng khối đại đoàn kết dân tộc",
      description:
        "Tìm hiểu các phương pháp và chiến lược xây dựng khối đại đoàn kết.",
      highlight: "Đoàn kết là nghệ thuật lãnh đạo",
      icon: "fas fa-hands-helping",
      image: "/images/Leftpicture.jpg",
      imageAlt: "Phương thức đoàn kết",
      overlayText: "Phương thức đoàn kết",
      isRight: true,
    },
    {
      number: "03",
      title: "Phân tích quan điểm của Hồ Chí Minh",
      description:
        "Đi sâu vào phân tích tư tưởng và quan điểm của Chủ tịch Hồ Chí Minh về đại đoàn kết.",
      highlight: "Tư tưởng bất hủ của thời đại",
      icon: "fas fa-lightbulb",
      image: "/images/Leftpicture.jpg",
      imageAlt: "Quan điểm Hồ Chí Minh",
      overlayText: "Tư tưởng Hồ Chí Minh",
    },
  ];

  return (
    <>
      {/* Vietnamese Traditional Elements */}
      <div className="vietnamese-decorations">
        {/* Dragon and Phoenix Elements */}
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

        {/* Lotus Flowers */}
        <div className="lotus lotus-1">
          <div className="lotus-petal"></div>
          <div className="lotus-petal"></div>
          <div className="lotus-petal"></div>
          <div className="lotus-petal"></div>
          <div className="lotus-center"></div>
        </div>
        <div className="lotus lotus-2">
          <div className="lotus-petal"></div>
          <div className="lotus-petal"></div>
          <div className="lotus-petal"></div>
          <div className="lotus-petal"></div>
          <div className="lotus-center"></div>
        </div>

        {/* Vietnamese Flag Elements */}
        <div className="flag-star flag-star-1">⭐</div>
        <div className="flag-star flag-star-2">⭐</div>

        {/* Temple Silhouettes */}
        <div className="temple-silhouette temple-left">
          <div className="temple-roof"></div>
          <div className="temple-body"></div>
        </div>
        <div className="temple-silhouette temple-right">
          <div className="temple-roof"></div>
          <div className="temple-body"></div>
        </div>
      </div>

      {/* Incense Smoke Effect */}
      <div className="incense-container">
        <div className="smoke smoke-1"></div>
        <div className="smoke smoke-2"></div>
        <div className="smoke smoke-3"></div>
      </div>

      {/* Traditional Vietnamese Audio */}
      <div className="audio-controls">
        <button
          id="audioToggle"
          className="audio-btn"
          title="Bật/Tắt âm thanh truyền thống"
        >
          <i className="fas fa-volume-up"></i>
        </button>
        <audio id="traditionalMusic" loop preload="auto">
          <source
            src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
            type="audio/wav"
          />
          <source
            src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
            type="audio/mpeg"
          />
        </audio>
      </div>

      {/* Historical decorative elements */}
      <div className="historical-ornaments">
        <div className="ornament ornament-top-left"></div>
        <div className="ornament ornament-top-right"></div>
        <div className="ornament ornament-bottom-left"></div>
        <div className="ornament ornament-bottom-right"></div>
      </div>

      {/* Particles Container */}
      <div id="particles-container" className="particles-container"></div>

      <Header />

      <main className="historical-main">
        {sectionsData.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </main>

      <Timeline />

      <References />

      <Footer />
    </>
  );
};

export default HomePage;
