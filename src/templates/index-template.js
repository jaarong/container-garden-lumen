// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMdx } from '../types';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

type Props = {
  data: AllMdx,
  pageContext: PageContext
};

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, logo: logo, url:url } = useSiteMetadata();
  const featureImage = logo;
  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  const { edges } = data.allMdx;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;
  const title = `${pageTitle} - ${siteTitle}`;
  const metaDescription = {siteSubtitle};
  const canonicalUrl = url;
  return (
    <Layout>
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
          site_name: siteTitle,
        }}
      />
      <Feed edges={edges} />
      <Pagination
        prevPagePath={prevPagePath}
        nextPagePath={nextPagePath}
        hasPrevPage={hasPrevPage}
        hasNextPage={hasNextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
            tagSlugs
          }
          frontmatter {
            title
            date
            category
            description
            tags
            featuredImage {
              alt
              src
              title
              id
            }
          }
        }
      }
    }
  }
`;

export default IndexTemplate;
