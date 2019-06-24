import React from 'react';
import { Link, graphql } from 'gatsby';

import '../styles/index.scss';
import { 
  Layout, Header, Sidebar, Content, 
  Menu, MenuItem, 
  Grid, Row, Column as Col,
  Dropdown,
  Image,
  Button,
  Icon,
  Hyperlink,
  Title
} from '../lib';
import Meta from '../doc_components/Meta';

const DocPageTemplate = (props) => {
  const post = props.data.markdownRemark;
  const currentFolder = post.fields.slug.split('/').filter(Boolean)[0].toLowerCase().trim();
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;
  const logo = props.data.logo;
  const pageList = props.data.allMarkdownRemark.edges.map(v => ({
    title: v.node.frontmatter.title,
    slug: v.node.fields.slug,
    selected: v.node.fields.slug === post.fields.slug,
    folder: v.node.fields.slug.split('/').filter(Boolean)[0].toLowerCase().trim()
  }));

  return (
    <>
      <Meta 
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt} 
      />
      <Layout>
        <Header outline='border-bottom'>
          <Grid>
            <Row paddingHorizontal='ls-50p'>
              <Col size='50px' style={{height: '47px'}}>
                <Hyperlink href='/' style={{border: 'none'}} paddingVertical='1px' >
                  <Image 
                    src={logo.childImageSharp.fixed.src} 
                    
                    alt='furl'
                  />
                </Hyperlink>
              </Col>
              <Col />
              <Col size={6}>
                <Menu type='horizontal' highlight='bottom'>
                  <MenuItem href='/#getting-started'>Getting started</MenuItem>
                  <MenuItem href='/design'>Design</MenuItem>
                  <MenuItem href='/components'>Components</MenuItem>
                </Menu>
              </Col>
              <Col size={1} style={{textAlign: 'right'}}>
                <Button 
                  fill='link' 
                  href='https://github.com/Chalarangelo/furl' 
                  target='external' 
                  size='small'
                  margin='calc(var(--ls-25p) + 3.5px)'
                >
                  <Icon name='github' height={18} width={18}/>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Header>
        <Sidebar outline='border-right'>
          <Menu type='vertical' highlight='left'>
            <MenuItem>
              <Dropdown text='Design' open>
                {
                  pageList.filter(v => v.folder === 'design').map(i => (
                    <MenuItem 
                      href={`${i.slug}`} 
                      selected={i.selected} 
                    >
                      {i.title}
                    </MenuItem>
                  ))
                }
              </Dropdown>            
            </MenuItem>
            <MenuItem>
              <Dropdown text='Components' open>
                {
                  pageList.filter(v => v.folder === 'components').map(i => (
                    <MenuItem 
                      href={`${i.slug}`} 
                      selected={i.selected} 
                    >
                      {i.title}
                    </MenuItem>
                  ))
                }
              </Dropdown>            
            </MenuItem>
          </Menu>
        </Sidebar>
        <Content>
          <Title level={2}>{post.frontmatter.title}</Title>
          <div dangerouslySetInnerHTML={{__html: post.html }} />
        </Content>
      </Layout>
    </>
  );
};

export default DocPageTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    logo: file(absolutePath: {regex: "/logo_md.png/"}) {
      id
      childImageSharp {
        fixed(height: 45, width: 45) {
          src
        }
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      fields {
        slug
      }
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
