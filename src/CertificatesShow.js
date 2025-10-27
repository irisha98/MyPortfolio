import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const slides = [
  { src: process.env.PUBLIC_URL + '/sliders/react.png', alt: 'React' },
  { src: process.env.PUBLIC_URL + '/sliders/js.png', alt: 'JavaScript' },
  { src: process.env.PUBLIC_URL + '/sliders/html.png', alt: 'HTML' },
  { src: process.env.PUBLIC_URL + '/sliders/bootstrap.png', alt: 'Bootstrap' },
];

function CertificatesShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="certificates">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.src} alt={slide.alt} className="slide-image" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CertificatesShow;
