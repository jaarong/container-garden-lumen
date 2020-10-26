// @flow strict
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faRssSquare } from '@fortawesome/free-solid-svg-icons'

type Props = {
  contacts: {
    [string]: string,
  },
};

//Needs to be rewritten in a more modular way
const Contacts = ({ contacts }: Props) => (
  <div className="py-5">
    <ul>
        <li className="inline-block pr-3">
          <a
            className="flex text-3xl text-white hover:text-green-500"
            href="https://www.twitter.com/@ContainerGreens"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
        </li>
        <li className="inline-block px-3">
          <a
            className="flex text-3xl text-white hover:text-green-500"
            href="https://www.instagram.com/@ContainerGreens"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
        </li>
        <li className="inline-block px-3">
          <a
            className="flex text-3xl text-white hover:text-green-500"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faRssSquare} />
          </a>
        </li>
        <li className="inline-block px-3">
          <a
            className="flex text-3xl text-white hover:text-green-500"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelopeSquare} />
          </a>
        </li>
    </ul>
  </div>
);

export default Contacts;
