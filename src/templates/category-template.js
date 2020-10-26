// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import type { PageContext, AllMdx } from '../types';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

type Props = {
  data: AllMdx,
  pageContext: PageContext
};

const CategoryTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, logo: logo, url: url } = useSiteMetadata();
  const featureImage = logo;
  const containerCss = "container mx-auto p-6 max-w-screen-lg";
  const {
    category,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage,
  } = pageContext;

  const { edges } = data.allMdx;
  const pageTitle = currentPage > 0 ? `${category} - Page ${currentPage}` : `${category}`;
  const canonicalUrl = url + "/category/" + category + "/";
  const metaDescription = "All posts in the " + category + " category - " + siteTitle;
  const title = `${pageTitle} - ${siteTitle}`;
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
      <Page header={category} containerCss={containerCss}>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage($category: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMdx(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { category: { eq: $category }, template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            categorySlug
            slug
          }
          frontmatter {
            date
            description
            category
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
    }
  }
`;

export default CategoryTemplate;
