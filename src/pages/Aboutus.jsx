import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'left', color: 'green', fontWeight: 'bold' }}>About Us</h1>
      <p style={{ textAlign: 'center', fontWeight: 'bold', color: 'green', marginBottom: '30px' }}>
        Welcome to Plant shop! Enjoy every plant products from us to decorate your home and garden.
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <img
            src="https://t3.ftcdn.net/jpg/06/61/25/16/360_F_661251619_XaoDht0encseo1tKifPvTJdH8X9EwRj7.jpg"
            alt="About Us"
            style={{ width: '100%',marginTop:'-110px', height: 'auto', borderRadius: '0px' }}
          />
        </div>
        <div style={{ flex: '1', paddingLeft: '30px' }}>
          <p style={{ color: 'black', lineHeight: '1.6', marginBottom: '10px',  }}>
          At Plant Shop, we are passionate about greenery. Our mission is to offer top-quality plants and gardening accessories that enrich your living spaces. From vibrant indoor plants to essential gardening tools, we have everything you need to cultivate a thriving, beautiful environment.
          </p>
          <p style={{ color: 'black', lineHeight: '1.6', marginBottom: '10px' }}>
          Our team is composed of plant enthusiasts who understand the needs of plant lovers. We strive to provide excellent customer service and support to ensure you have the best shopping experience possible.
          </p>
          <p style={{ color: 'black', lineHeight: '1.6', marginBottom: '20px' }}>
            Thank you for choosing Plant Shop. We look forward to serving all your plant needs!
          </p>
          {/* <button
            style={{
              marginTop: '20px',
              padding: '10px 30px',
              background: 'black',
              color: 'white',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
