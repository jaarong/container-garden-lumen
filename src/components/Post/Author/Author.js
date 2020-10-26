// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className="border-4 border-pine p-5">
      <h3 className="text-xl">About The Author</h3>
      <div className="flex my-6">
        <div className="mr-4 border border-white"><img src={author.photo} /></div>
        <div className="">
          <h4 className="text-lg">{author.name}</h4>
          <p>{author.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
