// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
import type { AllMdx, PageContext } from '../types';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

type Props = {
  data: AllMdx,
  pageContext: PageContext
};

const TagTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, logo: logo, url: url } = useSiteMetadata();
  const featureImage = logo;
  const containerCss = "container mx-auto p-6 max-w-screen-lg";
  const {
    tag,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage
  } = pageContext;

  const { edges } = data.allMdx;
  const pageTitle = currentPage > 0 ? `All Posts tagged as "${tag}" - Page ${currentPage} - ${siteTitle}` : `All Posts tagged as "${tag}" - ${siteTitle}`;
  const canonicalUrl = url + "/tag/" + tag + "/";
  const metaDescription = "All posts in the " + tag + " tag category - " + siteTitle;
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
      <Page header={tag} containerCss={containerCss}>
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
  query TagPage($tag: String, $postsLimit: Int!, $postsOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMdx(
        limit: $postsLimit,
        skip: $postsOffset,
        filter: { frontmatter: { tags: { in: [$tag] }, template: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
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

export default TagTemplate;
