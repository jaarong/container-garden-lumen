import React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
  <header className="bg-pine border-b">
    <a id="topofpage"></a>
    <div className="container mx-auto">
      <nav className="flex flex-col md:flex-row md:items-center justify-center md:justify-between md:flex-wrap md:p-1">
        <div className="flex justify-center md:flex-shrink-0 p-2">
          <Zoom>
            <div className="logo text-5xl pr-3"><Link className="text-dark" to="/"><FontAwesomeIcon icon={faSeedling} /></Link></div>
            <div className="p-1">
              <Link className="text-2xl" activeClassName="text-2xl" to="/">{title}</Link>
              <p className="block text-lg">{subtitle}</p>
            </div>
          </Zoom>
        </div>
        <div className="flex-grow text-center md:text-right bg-leaf-green text-lg md:bg-dark-green md:text-white">
         <AniLink paintDrip hex="#A1C181" className="inline-block p-2 hover:text-dark" activeClassName="inline-block p-2 text-dark" to="/">Home</AniLink>
         <AniLink paintDrip hex="#A1C181" className="inline-block p-2 hover:text-dark" activeClassName="inline-block p-2 text-dark" to="/pages/about/">About</AniLink>
         <AniLink paintDrip hex="#A1C181" className="inline-block p-2 hover:text-dark" activeClassName="inline-block p-2 text-dark" to="/contact-us/">Contact</AniLink>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;