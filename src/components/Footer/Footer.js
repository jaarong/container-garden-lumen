import React from "react"  
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent";

const Footer = () => { 
  
  return (
    <>
        <div className="border-t bg-pine text-lg border-green-700 absolute bottom-0 w-full">
          <div className="flex flex-wrap flex-row p-2 text-center container mx-auto lg:w-3/5 justify-center">
              <Link className="inline-block p-2 hover:text-primary" activeClassName="inline-block p-2 text-primary" to="/pages/about/">About</Link>
              <Link className="inline-block p-2 hover:text-primary" activeClassName="inline-block p-2 text-primary" to="/pages/contacts/">Contact</Link>
              <Link className="inline-block p-2 hover:text-primary" activeClassName="inline-block p-2 text-primary" to="/pages/privacy/">Privacy</Link>
              <Link className="inline-block p-2 hover:text-primary" activeClassName="inline-block p-2 text-primary" to="/pages/disclaimer/">Disclaimer</Link>
          </div>
          <CookieConsent
            onAccept={() => {
              window.location.reload(); 
            }}
            location="bottom"
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent>
        </div>
    </>
  )
}

export default Footer