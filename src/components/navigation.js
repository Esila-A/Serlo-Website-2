import { HashLink, NavHashLink } from "react-router-hash-link";

const Navigation = (props) => {
  return (
    <nav className="navigation">
      <HashLink to="/#landing" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Główna</HashLink>
      <HashLink to="/#services" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Usługi</HashLink>
      <NavHashLink to="/examples/#examples" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Nasze prace</NavHashLink>
      <HashLink to="/#about" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>O nas</HashLink>
      <HashLink to="/#contact" className="navigation_link" onClick={() => props.isMobilePhone && props.closeMenu()}>Kontakt</HashLink>
    </nav>
  );
};

export default Navigation;
