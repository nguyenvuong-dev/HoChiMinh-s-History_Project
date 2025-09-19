import React from "react";
import "./Section.css";

const Section = ({
  number,
  title,
  description,
  highlight,
  icon,
  image,
  imageAlt,
  overlayText,
  isRight = false,
}) => {
  return (
    <section
      className={`historical-section ${
        isRight ? "section-right" : "section-left"
      }`}
      data-aos={isRight ? "fade-left" : "fade-right"}
      data-aos-duration="1200"
    >
      <div className="section-number">{number}</div>
      <div className="section-container historical-card">
        {!isRight && (
          <div className="image-container historical-image">
            <div className="image-frame">
              <img src={image} alt={imageAlt} />
              <div className="image-overlay">
                <div className="overlay-text">{overlayText}</div>
              </div>
            </div>
          </div>
        )}

        <div className="content-box historical-content">
          <div className="content-header">
            <div className="section-icon">
              <i className={icon}></i>
            </div>
            <h2 className="section-title">{title}</h2>
          </div>
          <div className="content-body">
            <p className="section-description">{description}</p>
            <div className="content-highlight">
              <i className="fas fa-quote-left"></i>
              <span>{highlight}</span>
              <i className="fas fa-quote-right"></i>
            </div>
          </div>
        </div>

        {isRight && (
          <div className="image-container historical-image">
            <div className="image-frame">
              <img src={image} alt={imageAlt} />
              <div className="image-overlay">
                <div className="overlay-text">{overlayText}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
