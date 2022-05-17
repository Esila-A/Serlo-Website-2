import cyklinowanie from "../cyklinowanie.jpeg";
import łazienka from "../łazienka.jpg";
import malowanie from "../malowanie.jpg"

const Services = () => {
  return (
    <div className="services" id="services">
      <h2 className="services_heading">NASZE USŁUGI</h2>
      <div className="services_content">
        <h3 className="services_content--heading">CYKLINOWANIE PODŁÓG</h3>
        <div className="container">
          <img src={cyklinowanie} className="services_content--image" />
        </div>
      </div>
      <div className="services_content">
        <div className="container">
          <img src={łazienka} className="services_content--image" />
        </div>
        <h3 className="services_content--heading">REMONT ŁAZIENEK</h3>
      </div>
      <div className="services_content">
        <h3 className="services_content--heading">MALOWANIE ŚCIAN I SUFITÓW</h3>
        <div className="container">
          <img src={malowanie} className="services_content--image" />
        </div>
      </div>
      <h3 className="services_heading-two">POZOSTAŁE USŁUGI</h3>
      <div className="services_grid">
        <div className="services_grid--elements">USŁUGI HYDRAULICZNE<br/>DLA ŁAZIENEK</div>
        <div className="services_grid--elements">BEJCOWANIE</div>
        <div className="services_grid--elements">UKŁADANIE PARKIETÓW</div>
        <div className="services_grid--elements">WYMIANA DRZWI<br/>I OKIEN</div>
        <div className="services_grid--elements">USŁUGI WYKOŃCZENIOWE</div>
        <div className="services_grid--elements">UKŁADANIE PŁYTEK<br/>I PANELI</div>
        <div className="services_grid--elements">SKŁADANIE MEBLI</div>
        <div className="services_grid--elements">UKŁADANIE PARKIETÓW</div>
      </div>
    </div>
  );
};

export default Services;
