import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import image from './images/client.jpg'


const TestimonialSection = () => {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container">
          <h2>Testimonial</h2>
        </div>
        <Carousel id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
          <Carousel.Item>
            <div className="row">
              <div className="col-md-11 col-lg-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src={image} alt="" />
                  </div>
                  <div className="detail-box">
                    <div className="name">
                      <FontAwesomeIcon icon={faQuoteLeft} />
                      <h6>Siaalya</h6>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
