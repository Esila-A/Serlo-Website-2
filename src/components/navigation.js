import { HashLink as NavLink } from "react-router-hash-link";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <NavLink
        to="/#landing"
        className="navigation_link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Główna
      </NavLink>
      <NavLink
        to="/#services"
        className="navigation_link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Usługi
      </NavLink>
      <NavLink
        to="/#about"
        className="navigation_link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        O nas
      </NavLink>
      <NavLink
        to="/#contact"
        className="navigation_link"
        onClick={() => props.isMobilePhone && props.closeMenu()}
      >
        Kontakt
      </NavLink>

      {/* <a href="#landing" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Główna</a>
        <a href="#services" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Usługi</a>
        <a href="#about" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>O nas</a>
        <a href="#contact" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Kontakt</a> */}
    </nav>
  );
};

export default Navigation;
