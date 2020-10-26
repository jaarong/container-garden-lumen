// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { Mdx } from '../types';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

type Props = {
  data: {
    mdx: Mdx
  }
};

const PostTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, author:author, url: url, logo:logo } = useSiteMetadata();
  const { frontmatter } = data.mdx;
  const { title: pageTitle, description: postDescription, featuredImage: featuredImage, date: publishDate, category: category, tags: tags } = frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  const featureImage = featuredImage != null ? featuredImage : logo;
  const containerCss = "container mx-auto p-6 max-w-screen-md";
  const canonicalUrl = url + "/" + data.mdx.slug;
  const title = `${pageTitle} - ${siteTitle}`;
  return (
    <Layout >
      <GatsbySeo
        title={title}
        description={metaDescription}
        canonical={canonicalUrl}
        openGraph={{
          url: canonicalUrl,
          title: title,
          description: metaDescription,
          images: [
            {
              url: featureImage.src,
              width: 800,
              height: 600,
              alt: featureImage.alt,
            }
          ],
          type: 'article',
          article: {
            publishedTime: publishDate,
            section: category,
            authors: [
              author.name,
            ],
            tags: [tags],
          },
          site_name: siteTitle,
        }}
      />
      <Post containerCss={containerCss} post={data.mdx} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(slug: { eq: $slug } ) {
      id
      body
      slug
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        featuredImage {
          alt
          src
          title
          id
        }
      }
    }
  }
`;

export default PostTemplate;
