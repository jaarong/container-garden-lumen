// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/">
    <div class="logo text-5xl pr-3"><FontAwesomeIcon icon={faSeedling} /></div>
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className="pt-2 border-t-1 border-gray-100" to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className="pt-2 border-t-1 border-gray-100">
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <p className="pt-2 border-t-1 border-gray-100 text-gray-100 text-sm">{author.bio}</p>
  </div>
);

export default Author;
