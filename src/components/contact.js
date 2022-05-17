import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

import Form from "./form";

const Contact = () => {
  const phoneIcon = <FaPhoneAlt className="icon" />;
  const mailIcon = <IoMdMail className="icon" />;
  const facebookIcon = <FaFacebook className="icon" />;
  const mapIcon = <RiMapPin2Fill className="icon" />;

  return (
    <div className="contact" id="contact">
      <div className="contact_heading">
        <h2 className="contact_heading--h2">MASZ PYTANIA? DZWOŃ I PISZ!</h2>

        {/* <h3 className="contact_heading--h3">
          Śmiało pisz lub dzwoń w sprawie jakichkolwiek pytań lub porad. Bardzo
          chętnie odpowiemy i doradzimy :)
        </h3> */}
      </div>
      <div className="contact_information">
        <div>
          <p className="contact_information--name">Firma Serlo</p>
          <p className="contact_information--nip">
            {" "}
            NIP: xxxxxx, REGON: xxxxxxx
          </p>
          <div className="contact_information--details">
            {phoneIcon}
            <p className="contact_information--paragraph">+48 510 573 865</p>
          </div>
          <div className="contact_information--details">
            {mailIcon}
            <p className="contact_information--paragraph">kontakt@serlo.pl</p>
          </div>
          <div className="contact_information--details">
            {facebookIcon}
            <a
              href="https://www.facebook.com/profile.php?id=100079474383115"
              className="contact_information--link"
            >
              kliknij
            </a>
          </div>
          <div className="contact_information--details">
            {mapIcon}
            <p className="contact_information--paragraph">
              ul. Tadeusza Gajcego 7/156, 01-944 Warszawa
            </p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
