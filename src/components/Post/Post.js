// @flow strict
import React from 'react';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from '../Tags';
import type { Node } from '../../types';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
  post: Node,
  containerCss: string
};

const Post = ({ post, containerCss }: Props) => {
  const { body } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, featuredImage } = post.frontmatter;
  const featureImageSrc = `https://res.cloudinary.com/dibrkdu2g/image/upload/c_lpad,f_auto,q_auto,w_1280/${featuredImage.id}`;


  return (
    <div className="post-start">
      <div className="container sm:w-full md:w-3/5 m-auto text-center bg-opacity-50 bg-black">
        {/* <Banner title={title} featuredImage={featuredImage} /> */}
        <img src={featureImageSrc} title={featuredImage.title} alt={featuredImage.alt} />
        <h1 className="text-3xl lg:text-5xl text-gray-20">{title}</h1>
      </div>
      <div className={containerCss}>
        <Content body={body} title={title} />
      </div>

      <div className={containerCss}>
        <Meta date={date} />
        <span className="inline-block pr-4">Tags: </span>{tags && tagSlugs && <Tags tagCss="inline-block pr-3 font-semibold hover:text-primary hover:border-pine" tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={containerCss}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
      <div className={containerCss}>
        <div className="text-center">
          <button title="Back to top" className="border border-white text-lg rounded-lg p-3" onClick={() => scrollTo('#topofpage')}><FontAwesomeIcon icon={ faChevronUp } />&nbsp;&nbsp;To The Top </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
