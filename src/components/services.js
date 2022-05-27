import cyklinowanie from "../cyklinowanie.jpeg";
import łazienka from "../łazienka.jpg";
import malowanie from "../malowanie.jpg"

const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="services_heading">NASZE USŁUGI</h2>
      <div className="services_content">
        <div className="services_content--details">
          <h3 className="services_content--heading">RENOWACJA PARKIETÓW</h3>
          <ul>
            <li>cyklinowanie</li>
            <li>bejcowanie</li>
            <li>lakierowanie</li>
            <li>ocieplanie</li>
          </ul>
        </div>
        <div className="container">
          <img
            src={cyklinowanie}
            className="services_content--image"
            alt="cyklinowanie"
          />
        </div>
      </div>
      <div className="services_content reverse">
        <div className="container">
          <img
            src={łazienka}
            className="services_content--image"
            alt="łazienka"
          />
        </div>
        <div className="services_content--details">
          <h3 className="services_content--heading">REMONT ŁAZIENEK</h3>
          <ul>
            <li>montaż armatury</li>
            <li>
              modyfikacja istniejących instalacji
              <br />
              hydraulicznych i elektrycznych
            </li>
          </ul>
        </div>
      </div>
      <div className="services_content">
        <div className="services_content--details">
          <h3 className="services_content--heading">
            MALOWANIE ŚCIAN I SUFITÓW
          </h3>
          <ul>
            <li>zrywanie tapet</li>
            <li>gruntowanie</li>
            <li>malowanie</li>
          </ul>
        </div>
        <div className="container">
          <img
            src={malowanie}
            className="services_content--image"
            alt="malowanie"
          />
        </div>
      </div>
      <h3 className="services_heading-two">POZOSTAŁE USŁUGI</h3>
      <div className="services_grid">
        <div className="services_grid--elements one">
          UKŁADANIE
          <br />
          NOWYCH PARKIETÓW
        </div>
        <div className="services_grid--elements two">
          UKŁADANIE PŁYTEK
          <br />I PANELI
        </div>
        <div className="services_grid--elements three">
          UKŁADANIE PŁYT
          <br />
          WIELKOFORMATOWYCH
        </div>
        <div className="services_grid--elements four">
          WYMIANA DRZWI
          <br />I OKIEN
        </div>
        <div className="services_grid--elements five">SKŁADANIE MEBLI</div>
        <div className="services_grid--elements six">USŁUGI WYKOŃCZENIOWE</div>
      </div>
    </div>
  );
};

export default Services;
