import React from 'react';

function AboutPage() {
  return (
    <div className="page">
      <div className="page-header">
        <p className="eyebrow">Our Story</p>
        <h1>Creating beautiful, elegant design experiences.</h1>
        <p className="lead">
          At Wony, we're passionate about crafting stunning, accessible UI components and patterns. Our mission is to help builders create exceptional digital products with thoughtful design at every step.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="feature-icon">✨</div>
          <h3>Design Excellence</h3>
          <p>
            Every pixel is intentional. We focus on creating beautiful interfaces that are both visually stunning and intuitively designed for users.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">💎</div>
          <h3>Quality First</h3>
          <p>
            We never compromise on quality. Our components are thoroughly tested, accessible, and built to last through evolving design trends.
          </p>
        </div>
        <div className="about-card">
          <div className="feature-icon">🎨</div>
          <h3>Creative Innovation</h3>
          <p>
            We push creative boundaries while maintaining practical usability. Innovation and elegance go hand-in-hand in everything we create.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-row">
          <strong>2024</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo id enim
            et laoreet, posuere odio.
          </p>
        </div>
        <div className="timeline-row">
          <strong>2025</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet lectus gravida
            ultricies tristique eget amet.
          </p>
        </div>
        <div className="timeline-row">
          <strong>Today</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit massa porttitor aenean
            nibh faucibus scelerisque.
          </p>
        </div>
      </div>

      <div className="cta-banner">
        <h3>Get the next drop.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra interdum vel volutpat in
          molestie mauris quis.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
