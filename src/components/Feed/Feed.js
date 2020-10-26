// @flow strict
import React from 'react';
import type { Edges } from '../../types';
import Card from "../Card";

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className="container mx-auto p-6 max-w-screen-xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {edges.map((edge) => (
        <Card content={edge.node} />
      ))}
    </div>
  </div>
);

export default Feed;