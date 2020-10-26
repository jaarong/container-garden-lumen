// @flow strict
import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import type { Mdx } from '../types';

type Props = {
  body: Mdx,
  title: string,
  banner: string
};

const Content = ({ body, title, banner }: Props) => (
  <div>
    <div>
      <div className="markdown"><MDXRenderer>{body}</MDXRenderer></div>
    </div>
  </div>
);

export default Content;
