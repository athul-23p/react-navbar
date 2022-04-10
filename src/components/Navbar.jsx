import Links from "./Links";
import Logo from "./Logo";
import Contact from "./Contact";

function Navbar(props){

  return (
    <div id="navbar">
      <Logo />
      <Links links={props.links} />
      <Contact />
    </div> );
}

export default Navbar;