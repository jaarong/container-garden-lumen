// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Node } from '../../types';
import Tags from "../Tags";

type Props = {
  content: Node
};

const Card = ({ content }: Props) => {

    const featureImageSrc = `https://res.cloudinary.com/dibrkdu2g/image/upload/c_lpad,f_auto,q_auto,w_300/${content.frontmatter.featuredImage.id}`;

    return (
        <div className="max-w-sm rounded mx-4 overflow-hidden shadow-lg my-2 bg-pine border-olivine border-2" key={content.fields.slug}>
            <Link to={content.fields.slug}><img className="w-full" src={featureImageSrc} alt={content.frontmatter.featuredImage.alt} /></Link>
            <div className="px-4">
                <h2 className="text-2xl my-2">
                    <Link className="text-white" to={content.fields.slug}>{content.frontmatter.title}</Link>
                </h2>
                <div className="">
                <p>
                    <time className="text-sm text-gray-400 font-light uppercase" dateTime={moment(content.frontmatter.date).format('MMMM D, YYYY')}>
                        {moment(content.frontmatter.date).format('MMMM YYYY')}
                    </time>
                    <span className="text-sm font-semibold uppercase pl-4 text-primary">
                        <Link to={content.fields.categorySlug} className="">{content.frontmatter.category}</Link>
                    </span>
                </p>
                </div>
                <p className="my-6">{content.frontmatter.description}</p>
            </div>
            <div className="px-4">
                <Tags tagCss="inline-block pr-3 text-sm font-semibold hover:text-primary hover:border-pine" tags={content.frontmatter.tags} tagSlugs={content.fields.tagSlugs} />
            </div>
        </div>
    );
};

export default Card;