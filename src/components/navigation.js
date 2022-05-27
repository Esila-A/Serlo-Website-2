import { HashLink } from "react-router-hash-link";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <HashLink
        to="#landing"
        className="navigation_link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Główna
      </HashLink>
      <HashLink
        to="#services"
        className="navigation_link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Usługi
      </HashLink>
      <HashLink
        to="#about"
        className="navigation_link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        O nas
      </HashLink>
      <HashLink
        to="#contact"
        className="navigation_link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Kontakt
      </HashLink>

      {/* <a href="#landing" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Główna</a>
        <a href="#services" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Usługi</a>
        <a href="#about" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>O nas</a>
        <a href="#contact" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Kontakt</a> */}
    </nav>
  );
};

export default Navigation;
