import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '@src/components/layout/layout';

interface pType {
  data: {
    allMarkdownRemark: {
      edges: { node: any }[],
    }
  }
}

export default class extends React.Component<pType> {

  posts = this.props.data.allMarkdownRemark.edges;

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Helmet title='My First Blog' />

        <div style={{fontWeight: 'bold'}}>新着記事</div>
        {this.posts.map(post => {
          return (
            <div key={post.node.id}>
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
              <Img fluid={post.node.frontmatter.image.childImageSharp.fluid} style={{width: `120px`}}/>
            </div>
          );
        })}
      </Layout>
    );
  }
}

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid,
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    }
`;
