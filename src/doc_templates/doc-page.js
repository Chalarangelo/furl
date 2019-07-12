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
  Title,
  Footer,
  Paragraph,
  Text,
  Divider
} from '../lib';
import Meta from '../doc_components/Meta';
import HtmlMapper from '../doc_components/HtmlMapper';

const DocPageTemplate = (props) => {
  const post = props.data.markdownRemark;
  const currentFolder = post.fields.slug.split('/').filter(Boolean)[0].toLowerCase().trim();
  const siteTitle = props.data.site.siteMetadata.title;
  const logo = props.data.logo;
  const pageList = props.data.allMarkdownRemark.edges.map(v => ({
    title: v.node.frontmatter.title,
    slug: v.node.fields.slug,
    selected: v.node.fields.slug === post.fields.slug,
    folder: v.node.fields.slug.split('/').filter(Boolean)[0].toLowerCase().trim(),
    path: v.node.fileAbsolutePath
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
              <Col size={['calc(91% - 50px)', 'calc(91% - 50px)', 6, 6]}>
                <Menu type='horizontal' highlight='bottom'>
                  <MenuItem href='/#getting-started'>Getting started</MenuItem>
                  <MenuItem href='/design' selected={currentFolder === 'design'}>Design</MenuItem>
                  <MenuItem href='/components' selected={currentFolder === 'components'}>Components</MenuItem>
                </Menu>
              </Col>
              <Col size={1} style={{textAlign: 'right'}}>
                <Button 
                  fill='link' type='link'
                  href='https://github.com/Chalarangelo/furl' 
                  target='external' 
                  size='small'
                  marginVertical='calc(var(--ls-25p) + 3.5px)'
                  marginHorizontal='0'
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
              <Dropdown title='Design' open>
                {
                  pageList
                    .filter(v => v.folder === 'design')
                    .sort((a, b) => b.path.endsWith('index.md') ? 1 : a.path.endsWith('index.md') ? -1 : a.path.localeCompare(b.path))
                    .map(i => (
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
              <Dropdown title='Components' open>
                {
                  pageList
                    .filter(v => v.folder === 'components')
                    .sort((a, b) => b.path.endsWith('index.md') ? 1 : a.path.endsWith('index.md') ? -1 : a.path.localeCompare(b.path))
                    .map(i => (
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
          <Grid width='100%'>
            <Row>
              <Col />
              <Col size='800px'>
                <Title level={2}>{post.frontmatter.title}</Title>
                <HtmlMapper html={post.html} />
              </Col>
              <Col />
            </Row>
            <Row style={{borderTop: '1px solid var(--interface-gray-100)', marginTop: 'var(--ls-200p)'}}>
              <Col />
              <Col size='800px' style={{flex: '0 1 800px'}}>
                <Footer>
                  <Paragraph><Text textStyle='small'><Text textStyle='bold'>furl</Text> was designed and developed by <Hyperlink openIn='external' href='https://github.com/Chalarangelo'>Angelos Chalaris</Hyperlink> &copy; 2019<br/> Documentation generated using <Hyperlink openIn='external' href='https://www.gatsbyjs.org/'>Gatsby</Hyperlink>, hosting by <Hyperlink openIn='external' href='https://www.netlify.com/'>Netlify</Hyperlink></Text></Paragraph>
                </Footer>
              </Col>
              <Col />
            </Row>
          </Grid>
        </Content>
      </Layout>
    </>
  );
};

export default DocPageTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    logo: file(absolutePath: {regex: "/logo_reverse_md.png/"}) {
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
          fileAbsolutePath
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
