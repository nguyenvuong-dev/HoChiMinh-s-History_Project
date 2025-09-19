import React from "react";
import "./References.css";

const References = () => {
  const references = [
    {
      title: "Bảo tàng Hồ Chí Minh – Cổng thông tin",
      url: "https://hochiminh.vn/",
      description:
        "Nguồn tài liệu chính thức về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh",
    },
    {
      title: "Một số tư liệu lịch sử Việt Nam – Văn Miếu",
      url: "https://www.vanmieu.gov.vn/vi/",
      description: "Tham khảo bối cảnh lịch sử và văn hóa truyền thống",
    },
    {
      title: "Thư viện Quốc gia Việt Nam – Cơ sở dữ liệu số",
      url: "https://nlv.gov.vn/",
      description: "Cơ sở dữ liệu số về lịch sử và văn hóa Việt Nam",
    },
    {
      title: "Các bài viết nghiên cứu lịch sử – Tư liệu địa phương",
      url: "https://vhds.baothanhhoa.vn/",
      description: "Tư liệu địa phương và nghiên cứu lịch sử",
    },
    {
      title: "Chuyên trang Chủ tịch Hồ Chí Minh – Báo Nhân Dân",
      url: "https://nhandan.vn/chu-tich-ho-chi-minh",
      description: "Chuyên trang chính thức về Chủ tịch Hồ Chí Minh",
    },
  ];

  return (
    <section
      id="tai-lieu-tham-khao"
      className="references-section"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="section-container historical-card">
        <div className="content-box historical-content">
          <div className="content-header">
            <div className="section-icon">
              <i className="fas fa-book"></i>
            </div>
            <h2 className="section-title">Tài liệu tham khảo</h2>
          </div>
          <div className="content-body">
            <ul className="reference-list">
              {references.map((ref, index) => (
                <li key={index}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-link"
                  >
                    <div className="reference-title">{ref.title}</div>
                    <div className="reference-description">
                      {ref.description}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
