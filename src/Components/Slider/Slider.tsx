import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css';
import swiss_post_img1 from "../../../public/post-office1.jpg";
import swiss_post_img2 from "../../../public/post-office2.jpg";
import swiss_post_img3 from "../../../public/post-office3.jpg";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
          <img className="slider-image" src={swiss_post_img1} alt="Image 1" />
          <img className="slider-image" src={swiss_post_img2} alt="Image 2" />
          <img className="slider-image" src={swiss_post_img3} alt="Image 3" />
      </Slider>
    </div>
  );
};

export default ImageSlider;
