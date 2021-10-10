import React from "react";
//React.component because its class based component rather than a function based one
//impt for short
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

//destructuring the props as icon and title only
const Navbar = ({ icon, title }) => {
  //prop types - type checking tells the developer what type of props it is

  // For the nav bar we can't use a tags because the information
  //on the website is erased from page to page, instead we use Link which is a non default 
  //library which is why it has curly braces around it like this {LINK}
  //notice that link uses to instead of href

  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* creates a github icon with nav bar look at docs  */}
        <i className={icon} /> {title}
      </h1>

      <ul>
        <li>
          <Link to='/'> Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

    </nav>
  );
};

//default props, the user can set their own props for icon and title
Navbar.defaultProps = {
  icon: "fab fa-github",
  title: "Github Finder",
};
//good for getting rid of warning signs and creates a more robust system.
//tells the developer that the props passed must be whatever the type check what set to.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
//------->orignally the component was a class now its changed to a functional component instead
// static defaultProps = {
//     icon : "fab fa-github",
//     title: "Github Finder"
// }
// //good for getting rid of warning signs and creates a more robust system.
// //tells the developer that the props passed must be whatever the type check what set to.
// static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
// }
export default Navbar;
