// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

type Props = {
  tags: string[],
  tagSlugs: string[],
  tagCss: string
};

const Tags = ({ tagCss, tags, tagSlugs }: Props) => (
  <div className="inline-block">
    <ul className="inline-block list-none my-4">
      {tagSlugs && tagSlugs.map((slug, i) => (
        <li className={tagCss} key={tags[i]}>
          <Link to={slug}>
          <FontAwesomeIcon icon={ faHashtag } />{tags[i]}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;