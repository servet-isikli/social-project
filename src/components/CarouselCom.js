import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";
import banner3 from "../assets/img/banner3.png";


function CarouselCom() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>İyilik İçin Adım Atın!</h3>
          <p>Samimiyetle Destek Verin, İyiliklerin Gücünü Hissettirin!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Samimi Sosyalleşme ve İyilik</h3>
          <p>Sosyal Bağlarınızı Güçlendirin, İyilik Ağına Katılın!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Daha Sıcak, Daha Yakın: İyilik Yapın</h3>
          <p>Gülümsemeyle Başlayan İyilikler, Samimiyetle Büyür ve Yayılır</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCom;
