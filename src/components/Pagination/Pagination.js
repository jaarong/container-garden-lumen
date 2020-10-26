// @flow strict
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
};

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}: Props) => {

  return (
    <div className="container mx-auto p-6 max-w-screen-lg">
      <div className="inline-block w-2/4 text-left">
        <Link className="text-xl text-secondary" rel="prev" to={hasPrevPage ? prevPagePath : '/'} ><FontAwesomeIcon icon={faChevronLeft} /> PREV</Link>
      </div>
      <div className="inline-block w-2/4 text-right">
        <Link className="text-info text-xl" rel="next" to={hasNextPage ? nextPagePath : '/'} >NEXT <FontAwesomeIcon icon={faChevronRight} /></Link>
      </div>
    </div>
  );
};

export default Pagination;
