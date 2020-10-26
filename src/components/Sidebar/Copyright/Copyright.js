// @flow strict
import React from 'react';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className="">
    {copyright}
  </div>
);

export default Copyright;
