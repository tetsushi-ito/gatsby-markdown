import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '@src/components/layout/layout';
import Helmet from 'react-helmet';

export default function Template(data: any) {

  const { markdownRemark } = data.data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Helmet title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div>公開日時：{frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
