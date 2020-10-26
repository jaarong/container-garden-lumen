// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

type Props = {
  title: string,
  subtitle: string,
  isIndex: ?boolean
};

const Publisher = ({ title, subtitle, isIndex }: Props) => (
  <div>
    <Link to="/">
    <div class="logo text-5xl pr-3"><FontAwesomeIcon icon={faSeedling} /></div>
    </Link>

    { isIndex === true ? (
      <h1 className="text-2xl pt-2 border-t-1 border-gray-100">
        <Link to="/">{title}</Link>
      </h1>
    ) : (
      <h2 className="text-xl pt-2 border-t-1 border-gray-100">
        <Link to="/">{title}</Link>
      </h2>
    )}
    <p className="pt-2 border-t-1 border-gray-100 text-gray-100 text-sm">{subtitle}</p>
  </div>
);

export default Publisher;