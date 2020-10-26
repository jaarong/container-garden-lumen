// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import type { Mdx } from '../types';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

type Props = {
  data: {
    mdx: Mdx
  }
};

const PageTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle, logo: logo, url: url } = useSiteMetadata();
  const { body } = data.mdx;
  const { frontmatter } = data.mdx;
  const { title: pageTitle, description: pageDescription } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;
  const containerCss = "container mx-auto p-6 max-w-screen-md";
  const featureImage = logo;
  const canonicalUrl = url + "/" + data.mdx.slug;
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
      <Page header={pageTitle} containerCss={containerCss}>
        <MDXRenderer>{body}</MDXRenderer>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    mdx( slug: { eq: $slug } ) {
      id
      body
      slug
      frontmatter {
        title
        date
        description

      }
    }
  }
`;

export default PageTemplate;
